
import React from "react";
import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MentorLiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const MentorLiveDialog: React.FC<MentorLiveDialogProps> = ({ 
  open, 
  onOpenChange, 
  onConfirm 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/10 backdrop-blur-md border border-white/20 text-white max-w-md">
        <div className="flex flex-col items-center p-4">
          <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
            <Video className="h-8 w-8 text-green-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Mentor is live in the laboratory!</h2>
          <p className="text-white/80 text-center mb-6">Join now to participate in the live session with expert guidance and real-time interaction.</p>
          
          <Button
            onClick={onConfirm}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-2 rounded-full font-medium"
          >
            Let's Go!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MentorLiveDialog;
