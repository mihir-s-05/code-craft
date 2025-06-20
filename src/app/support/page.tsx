import NavigationHeader from "@/components/NavigationHeader";
import { Mail, MessageCircle, Book, HelpCircle, Clock, ExternalLink } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
      <NavigationHeader />
      
      <main className="relative pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-10" />
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6">
                Support Center
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get help with CodeCraft. We're here to assist you with any questions or issues.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Email Support</h3>
                <p className="text-gray-400 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
                <a 
                  href="mailto:support@codecraft.dev" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  support@codecraft.dev
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Community Forum</h3>
                <p className="text-gray-400 mb-4">Join our community discussions and get help from other developers.</p>
                <a 
                  href="https://github.com/codecraft/discussions" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Visit Forum
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="relative bg-gradient-to-b from-[#12121a]/90 to-[#0a0a0f]/90 backdrop-blur-xl rounded-2xl p-8 mb-12">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 ring-1 ring-gray-800/60">
                  <HelpCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-800/50 pb-6">
                  <h3 className="text-lg font-medium text-white mb-2">How do I run my code?</h3>
                  <p className="text-gray-400">Simply click the "Run" button or use Ctrl+Enter (Cmd+Enter on Mac) to execute your code. Make sure you've selected the correct language.</p>
                </div>

                <div className="border-b border-gray-800/50 pb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Can I save my code snippets?</h3>
                  <p className="text-gray-400">Yes! Create an account to save, share, and manage your code snippets. Pro users get unlimited private snippets.</p>
                </div>

                <div className="border-b border-gray-800/50 pb-6">
                  <h3 className="text-lg font-medium text-white mb-2">What programming languages are supported?</h3>
                  <p className="text-gray-400">We support JavaScript, TypeScript, Python, Java, C++, Go, Rust, and many more. New languages are added regularly.</p>
                </div>

                <div className="border-b border-gray-800/50 pb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Is there a mobile app?</h3>
                  <p className="text-gray-400">CodeCraft is fully responsive and works great on mobile browsers. A dedicated mobile app is in development.</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">How do I upgrade to Pro?</h3>
                  <p className="text-gray-400">Visit our pricing page and click "Upgrade to Pro". You'll get instant access to all Pro features with a one-time payment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-center justify-center gap-3 p-6 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-gray-800/50">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">Average response time: 24 hours</span>
          </div>
        </div>
      </main>
    </div>
  );
}