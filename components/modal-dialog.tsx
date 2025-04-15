import { Questions } from "@/app/libs/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./modal-dialog.module.css";

interface Steps {
  question: string;
  result?: React.ReactElement;
  isFinal?: boolean;
  options?: any[];
  type?: string;
  isRejected?: boolean;
}

interface ModalDialogProps {
  data: Questions;
  onClose: () => void;
}

interface Answers {
  [key: string | number]: {
    value: string | number;
    isRejection: boolean;
  };
}

export default function ModalDialog({ data, onClose }: ModalDialogProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      handleNext();
    }
  }, [answers]);

  const steps: Steps[] = [];
  data.questions.forEach((question) => {
    steps.push(question);
    steps.push({
      question: "Result",
      result: (
        <h4>
          Unfortunately, we are unable to prescribe this medication for you.
          This is because finasteride can alter the PSA levels, which may be
          used to monitor for cancer. You should discuss this further with your
          GP or specialist if you would still like this medication.
        </h4>
      ),
      isFinal: true,
      isRejected: true,
    });
  });
  steps.push({
    question: "Result",
    result: (
      <h4>
        Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
        <a
          className={styles.resultTextLink}
          target="_blank"
          href="https://www.manual.co"
        >
          www.manual.co
        </a>
        , and prepare to say hello to your new hair!
      </h4>
    ),
    isFinal: true,
    isRejected: false,
  });

  const currentStep = steps[activeStep];

  const currentAnswer = answers[activeStep];

  const handleNext = () => {
    if (currentStep.isFinal) {
      onClose();
    } else if (currentAnswer.isRejection) {
      setActiveStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev + 2);
    }
  };

  const handleBack = () => {
    if (currentStep.isRejected) {
      setActiveStep((prev) => prev - 1);
    } else if (activeStep > 0) {
      setActiveStep((prev) => prev - 2);
    }
  };

  const handleOptionClick = (
    step: number,
    value: string,
    isRejectionVal: boolean,
  ) => {
    setAnswers((ans) => ({
      ...ans,
      [step]: { value, isRejection: isRejectionVal },
    }));
  };

  const handleOptionKeyPress = (
    event: React.KeyboardEvent,
    step: number,
    value: string,
    isRejectionVal: boolean,
  ) => {
    if (event.key === "Enter") {
      handleOptionClick(step, value, isRejectionVal);
    }
  };

  return (
    <motion.div
      key="modalOverlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.modalOverlay}
    >
      <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={onClose}>
          <AiOutlineClose size={24} color="black" />
        </button>
        <h2 className={styles.questionHeading}>{currentStep.question}</h2>
        <div className={styles.optionsContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className={styles.motionDiv}
            >
              {!currentStep.isFinal && currentStep.options && (
                <div
                  className={`${styles.optionContainer} ${currentStep.options.length < 3 ? styles.twoColumnGrid : ""}`}
                >
                  {currentStep.options.map((option) => (
                    <div
                      key={option.value}
                      dangerouslySetInnerHTML={{ __html: option.display }}
                      className={styles.optionWrapper}
                      style={{
                        backgroundColor:
                          currentAnswer?.value === option.value
                            ? "#c4d5e8"
                            : undefined,
                      }}
                      onClick={() =>
                        handleOptionClick(
                          activeStep,
                          option.value,
                          option.isRejection,
                        )
                      }
                      onKeyDown={(event) =>
                        handleOptionKeyPress(
                          event,
                          activeStep,
                          option.value,
                          option.isRejection,
                        )
                      }
                      role="button"
                      tabIndex={0}
                    />
                  ))}
                </div>
              )}

              {currentStep.isFinal && (
                <div className={styles.resultText}>{currentStep.result}</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className={styles.buttonElement}
            style={{
              cursor: activeStep === 0 ? "not-allowed" : "pointer",
            }}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentAnswer?.value === undefined && !currentStep.isFinal
            }
            style={{
              cursor:
                currentAnswer?.value === undefined && !currentStep.isFinal
                  ? "not-allowed"
                  : "pointer",
            }}
            className={styles.nextButton}
          >
            {currentStep.isFinal ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
