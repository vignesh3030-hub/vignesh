
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, EyeOff, Sparkles, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading time for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Dummy authentication
    if (username === "police" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify({ username }));
      
      toast({
        title: "Login Successful",
        description: "Welcome to Crime Data Management System",
      });
      
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Use: police / admin123",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-accent/10 p-4 animate-gradient-shift">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(217_91%_60%/0.1),transparent_50%)] animate-pulse-glow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(269_91%_68%/0.1),transparent_50%)] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <Card className="w-full max-w-md glass-effect shadow-2xl animate-scale-in border-primary/20">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center animate-bounce-in">
            <div className="relative">
              <Shield className="h-16 w-16 text-primary animate-pulse-glow" />
              <Sparkles className="h-6 w-6 text-accent absolute -top-2 -right-2 animate-spin" />
            </div>
          </div>
          <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardTitle className="text-2xl font-bold gradient-text">
              Crime Data Management System
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter your credentials to access the system
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 hover-glow transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 hover-glow transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 hover-scale"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-electric hover:opacity-90 text-white font-semibold py-6 animate-fade-in hover-scale transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ animationDelay: '0.5s' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Authenticating...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          
          <div className="text-center space-y-2 pt-4 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground">Demo Credentials:</p>
            <div className="bg-muted/50 rounded-lg p-3 space-y-1 hover-glow transition-all duration-300">
              <p className="text-sm font-mono">
                <strong className="text-electric-blue">Username:</strong> police
              </p>
              <p className="text-sm font-mono">
                <strong className="text-electric-purple">Password:</strong> admin123
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
