
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export const BankAccountForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firNumber: "",
    accountNumber: "",
    bankName: "",
    accountHolder: "",
    transactionDate: "",
    amount: "",
    transactionType: "",
    description: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bank Account Data Saved",
      description: "Bank account information has been successfully added to the database.",
    });
    setFormData({
      firNumber: "",
      accountNumber: "",
      bankName: "",
      accountHolder: "",
      transactionDate: "",
      amount: "",
      transactionType: "",
      description: "",
      notes: ""
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Bank Account Data Entry</h3>
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
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              value={formData.accountNumber}
              onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
              placeholder="123456789012"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="bankName">Bank Name</Label>
            <Select value={formData.bankName} onValueChange={(value) => setFormData({...formData, bankName: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sbi">State Bank of India</SelectItem>
                <SelectItem value="hdfc">HDFC Bank</SelectItem>
                <SelectItem value="icici">ICICI Bank</SelectItem>
                <SelectItem value="axis">Axis Bank</SelectItem>
                <SelectItem value="pnb">Punjab National Bank</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="accountHolder">Account Holder Name</Label>
            <Input
              id="accountHolder"
              value={formData.accountHolder}
              onChange={(e) => setFormData({...formData, accountHolder: e.target.value})}
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="transactionDate">Transaction Date</Label>
            <Input
              id="transactionDate"
              type="date"
              value={formData.transactionDate}
              onChange={(e) => setFormData({...formData, transactionDate: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="amount">Amount (₹)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              placeholder="10000.00"
              required
            />
          </div>
          <div>
            <Label htmlFor="transactionType">Transaction Type</Label>
            <Select value={formData.transactionType} onValueChange={(value) => setFormData({...formData, transactionType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="credit">Credit</SelectItem>
                <SelectItem value="debit">Debit</SelectItem>
                <SelectItem value="transfer">Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Transaction Description</Label>
          <Input
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="UPI/NEFT/RTGS - Transfer details"
          />
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            placeholder="Any additional information about this transaction..."
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full">
          Save Bank Account Data
        </Button>
      </form>
    </Card>
  );
};
