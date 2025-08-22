
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const CDRDataForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firNumber: "",
    phoneNumber: "",
    callType: "",
    duration: "",
    timestamp: "",
    location: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "CDR Data Saved",
      description: "Call Detail Record has been successfully added to the database.",
    });
    setFormData({
      firNumber: "",
      phoneNumber: "",
      callType: "",
      duration: "",
      timestamp: "",
      location: "",
      notes: ""
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Call Detail Record (CDR) Entry</h3>
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
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              placeholder="+91-9876543210"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="callType">Call Type</Label>
            <Select value={formData.callType} onValueChange={(value) => setFormData({...formData, callType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select call type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="incoming">Incoming</SelectItem>
                <SelectItem value="outgoing">Outgoing</SelectItem>
                <SelectItem value="missed">Missed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="duration">Duration (seconds)</Label>
            <Input
              id="duration"
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({...formData, duration: e.target.value})}
              placeholder="120"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="timestamp">Date & Time</Label>
            <Input
              id="timestamp"
              type="datetime-local"
              value={formData.timestamp}
              onChange={(e) => setFormData({...formData, timestamp: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Cell Tower Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="Mumbai Central"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            placeholder="Any additional information about this call record..."
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full">
          Save CDR Data
        </Button>
      </form>
    </Card>
  );
};
