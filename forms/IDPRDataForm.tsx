
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const IDPRDataForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firNumber: "",
    documentType: "",
    documentNumber: "",
    holderName: "",
    dateOfBirth: "",
    address: "",
    issueDate: "",
    expiryDate: "",
    issuingAuthority: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "IDPR Data Saved",
      description: "Identity Document/Police Record has been successfully added to the database.",
    });
    setFormData({
      firNumber: "",
      documentType: "",
      documentNumber: "",
      holderName: "",
      dateOfBirth: "",
      address: "",
      issueDate: "",
      expiryDate: "",
      issuingAuthority: "",
      notes: ""
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Identity Document/Police Record (IDPR) Entry</h3>
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
            <Label htmlFor="documentType">Document Type</Label>
            <Select value={formData.documentType} onValueChange={(value) => setFormData({...formData, documentType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aadhar">Aadhar Card</SelectItem>
                <SelectItem value="pan">PAN Card</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="license">Driving License</SelectItem>
                <SelectItem value="voter">Voter ID</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="documentNumber">Document Number</Label>
            <Input
              id="documentNumber"
              value={formData.documentNumber}
              onChange={(e) => setFormData({...formData, documentNumber: e.target.value})}
              placeholder="ABCD1234E"
              required
            />
          </div>
          <div>
            <Label htmlFor="holderName">Document Holder Name</Label>
            <Input
              id="holderName"
              value={formData.holderName}
              onChange={(e) => setFormData({...formData, holderName: e.target.value})}
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="issuingAuthority">Issuing Authority</Label>
            <Input
              id="issuingAuthority"
              value={formData.issuingAuthority}
              onChange={(e) => setFormData({...formData, issuingAuthority: e.target.value})}
              placeholder="Government of India"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            placeholder="Complete address as per document..."
            rows={2}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="issueDate">Issue Date</Label>
            <Input
              id="issueDate"
              type="date"
              value={formData.issueDate}
              onChange={(e) => setFormData({...formData, issueDate: e.target.value})}
            />
          </div>
          <div>
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            placeholder="Any additional information about this document..."
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full">
          Save IDPR Data
        </Button>
      </form>
    </Card>
  );
};
