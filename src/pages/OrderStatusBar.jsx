import React from "react";

const OrderStatusBar = ({ status }) => {
  const steps = ["Processing", "Shipped", "Delivered"];
  const currentStep = steps.indexOf(status);

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      {steps.map((step, index) => (
        <div key={index} className="text-center flex-fill">
          <div
            className={`rounded-circle mx-auto mb-2 ${
              index <= currentStep ? "bg-success" : "bg-secondary"
            }`}
            style={{
              width: "30px",
              height: "30px",
              lineHeight: "30px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {index + 1}
          </div>
          <p
            className={`${
              index <= currentStep ? "text-success" : "text-muted"
            } small`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusBar;
