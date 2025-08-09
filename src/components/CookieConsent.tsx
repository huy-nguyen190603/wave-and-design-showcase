import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-xs">
      <div className="bg-card border border-border rounded-lg shadow-lg p-4 space-y-3">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={14} />
        </button>
        
        <div className="space-y-2 pr-5">
          <h3 className="font-inter font-semibold text-xs text-foreground">
            Cookie Preferences
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            I use cookies to enhance your experience and analyze site usage.
          </p>
        </div>

        <div className="flex gap-2 pt-1">
          <Button
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="flex-1 text-xs font-medium h-7"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            size="sm"
            className="flex-1 text-xs font-medium h-7"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;