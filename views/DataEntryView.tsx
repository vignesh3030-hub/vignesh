
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, CreditCard, FileText, Upload } from "lucide-react";
import { CDRDataForm } from "@/components/forms/CDRDataForm";
import { BankAccountForm } from "@/components/forms/BankAccountForm";
import { IDPRDataForm } from "@/components/forms/IDPRDataForm";

export const DataEntryView = () => {
  const [activeTab, setActiveTab] = useState("cdr");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Data Entry</h2>
        <p className="text-muted-foreground">
          Add investigation data for CDR, Bank Accounts, and IDPR records
        </p>
      </div>

      <Card className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cdr" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              CDR Data
            </TabsTrigger>
            <TabsTrigger value="bank" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Bank Accounts
            </TabsTrigger>
            <TabsTrigger value="idpr" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              IDPR Data
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cdr" className="mt-6">
            <CDRDataForm />
          </TabsContent>

          <TabsContent value="bank" className="mt-6">
            <BankAccountForm />
          </TabsContent>

          <TabsContent value="idpr" className="mt-6">
            <IDPRDataForm />
          </TabsContent>
        </Tabs>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Bulk Data Import</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-sm text-gray-600 mb-2">
            Drag and drop files here, or click to select files
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Supported formats: CSV, Excel, JSON
          </p>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Choose Files
          </Button>
        </div>
      </Card>
    </div>
  );
};
