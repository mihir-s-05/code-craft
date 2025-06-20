import NavigationHeader from "@/components/NavigationHeader";
import { Shield, Eye, Lock, Database, UserCheck, Clock } from "lucide-react";

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
                         <p className="text-sm text-gray-500 mt-4">Last updated: June 2025</p>
          </div>

          {/* Privacy Principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Data Protection</h3>
                <p className="text-gray-400">We use industry-standard encryption to protect your data.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Transparency</h3>
                <p className="text-gray-400">We&apos;re clear about what data we collect and why.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <UserCheck className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Your Control</h3>
                <p className="text-gray-400">You have full control over your personal information.</p>
              </div>
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="relative bg-gradient-to-b from-[#12121a]/90 to-[#0a0a0f]/90 backdrop-blur-xl rounded-2xl p-8">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            <div className="relative space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">Account Information:</strong> When you create an account, we collect your email address, username, and profile information you choose to provide.</p>
                  <p><strong className="text-white">Code Snippets:</strong> We store the code snippets you create, along with any comments or metadata you add.</p>
                  <p><strong className="text-white">Usage Data:</strong> We collect information about how you use our service, including feature usage and performance metrics.</p>
                  <p><strong className="text-white">Technical Information:</strong> IP address, browser type, device information, and other technical details for security and optimization.</p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and improve our code execution and sharing services</li>
                    <li>Authenticate your account and ensure security</li>
                    <li>Send important service updates and security notifications</li>
                    <li>Analyze usage patterns to improve our platform</li>
                    <li>Provide customer support when requested</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Data Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety, or that of our users</li>
                    <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We implement industry-standard security measures to protect your data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and monitoring</li>
                    <li>Access controls and authentication systems</li>
                    <li>Secure cloud infrastructure with reputable providers</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal data</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Delete your account and associated data</li>
                    <li>Export your data in a portable format</li>
                    <li>Opt out of non-essential communications</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Keep you logged in to your account</li>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze site usage and performance</li>
                    <li>Provide security features and fraud prevention</li>
                  </ul>
                  <p>You can control cookies through your browser settings, but some features may not work properly if cookies are disabled.</p>
                </div>
              </section>


            </div>
          </div>

          {/* Last Updated */}
          <div className="flex items-center justify-center gap-3 p-6 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-gray-800/50 mt-8">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">This policy was last updated on June 2025</span>
          </div>
        </div>
      </main>
    </div>
  );
}