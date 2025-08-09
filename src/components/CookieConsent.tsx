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
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-card border border-border rounded-lg shadow-lg p-6 space-y-4">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={16} />
        </button>
        
        <div className="space-y-3 pr-6">
          <h3 className="font-inter font-semibold text-sm text-foreground">
            Cookie Preferences
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We use cookies to enhance your experience and analyze site usage. 
            Your privacy matters to us.
          </p>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="flex-1 text-xs font-medium"
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            size="sm"
            className="flex-1 text-xs font-medium"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;