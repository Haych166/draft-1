import { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [plan, setPlan] = useState("free"); // "free" | "premium" | "pro"

  return (
    <SubscriptionContext.Provider value={{ plan, setPlan }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}
