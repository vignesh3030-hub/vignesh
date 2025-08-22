
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

interface CrimeRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CrimeRecordModal = ({ isOpen, onClose }: CrimeRecordModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firNumber: "",
    crimeType: "",
    description: "",
    location: "",
    dateTime: "",
    complainant: "",
    officer: "",
    status: "Active"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Crime Record Created",
      description: `FIR ${formData.firNumber} has been successfully created.`,
    });
    onClose();
    setFormData({
      firNumber: "",
      crimeType: "",
      description: "",
      location: "",
      dateTime: "",
      complainant: "",
      officer: "",
      status: "Active"
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Crime Record</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firNumber">FIR Number</Label>
              <Input
                id="firNumber"
                value={formData.firNumber}
                onChange={(e) => setFormData({...formData, firNumber: e.target.value})}
                placeholder="FIR-2024-001"
                required
              />
            </div>
            <div>
              <Label htmlFor="crimeType">Crime Type</Label>
              <Select value={formData.crimeType} onValueChange={(value) => setFormData({...formData, crimeType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crime type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fraud">Fraud</SelectItem>
                  <SelectItem value="theft">Theft</SelectItem>
                  <SelectItem value="cybercrime">Cybercrime</SelectItem>
                  <SelectItem value="assault">Assault</SelectItem>
                  <SelectItem value="robbery">Robbery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Crime Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Detailed description of the crime..."
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Crime location"
                required
              />
            </div>
            <div>
              <Label htmlFor="dateTime">Date & Time</Label>
              <Input
                id="dateTime"
                type="datetime-local"
                value={formData.dateTime}
                onChange={(e) => setFormData({...formData, dateTime: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="complainant">Complainant Name</Label>
              <Input
                id="complainant"
                value={formData.complainant}
                onChange={(e) => setFormData({...formData, complainant: e.target.value})}
                placeholder="Complainant name"
                required
              />
            </div>
            <div>
              <Label htmlFor="officer">Investigating Officer</Label>
              <Input
                id="officer"
                value={formData.officer}
                onChange={(e) => setFormData({...formData, officer: e.target.value})}
                placeholder="Officer name"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Create Record
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
