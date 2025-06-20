import NavigationHeader from "@/components/NavigationHeader";
import { FileText, Scale, AlertTriangle, Shield, Users, Clock } from "lucide-react";

export default function TermsPage() {
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
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using CodeCraft. By using our service, you agree to these terms.
            </p>
                         <p className="text-sm text-gray-500 mt-4">Last updated: June 2025</p>
          </div>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <Scale className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Fair Use</h3>
                <p className="text-gray-400">Use our service responsibly and respect other users.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Your Rights</h3>
                <p className="text-gray-400">You retain ownership of your code and content.</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-b from-[#12121a] to-[#0a0a0f] rounded-2xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4 ring-1 ring-gray-800/60 group-hover:ring-blue-500/20">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Community</h3>
                <p className="text-gray-400">Be respectful and help create a positive environment.</p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="relative bg-gradient-to-b from-[#12121a]/90 to-[#0a0a0f]/90 backdrop-blur-xl rounded-2xl p-8">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            <div className="relative space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>By accessing and using CodeCraft, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                  <p>These terms apply to all visitors, users, and others who access or use the service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Use License</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Permission is granted to temporarily use CodeCraft for personal and commercial use. This is the grant of a license, not a transfer of title, and under this license you may:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Create, edit, and run code snippets</li>
                    <li>Share your public code snippets with others</li>
                    <li>Access community features and content</li>
                    <li>Use our API within reasonable limits</li>
                  </ul>
                  <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">User Content</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">Ownership:</strong> You retain all rights to the code and content you create using CodeCraft.</p>
                  <p><strong className="text-white">License to Us:</strong> By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your public content as part of the service.</p>
                  <p><strong className="text-white">Responsibility:</strong> You are responsible for your content and must ensure you have the right to share it.</p>
                  <p><strong className="text-white">Prohibited Content:</strong> You may not upload content that is illegal, harmful, threatening, abusive, or violates intellectual property rights.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Acceptable Use</h2>
                <div className="space-y-4 text-gray-300">
                  <p>You agree not to use the service:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h2 className="text-xl font-semibold text-white">Service Availability</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>We strive to maintain high service availability, but we cannot guarantee 100% uptime. The service may be temporarily unavailable due to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Scheduled maintenance</li>
                    <li>Emergency maintenance</li>
                    <li>Technical issues beyond our control</li>
                    <li>Third-party service dependencies</li>
                  </ul>
                  <p>We will make reasonable efforts to notify users of planned maintenance in advance.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Privacy and Data</h2>
                <div className="space-y-4 text-gray-300">
                  <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.</p>
                  <p>By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Payment Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <p><strong className="text-white">Pro Subscription:</strong> Our Pro plan is offered as a one-time lifetime purchase.</p>
                  <p><strong className="text-white">Refunds:</strong> All sales are final. Refunds may be considered on a case-by-case basis within 30 days of purchase.</p>
                  <p><strong className="text-white">Price Changes:</strong> We reserve the right to modify our pricing at any time. Current users will not be affected by price changes.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-300">
                  <p>In no event shall CodeCraft, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Termination</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                  <p>You may terminate your account at any time by contacting us or using the account deletion feature.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Changes to Terms</h2>
                <div className="space-y-4 text-gray-300">
                  <p>We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the service.</p>
                  <p>Your continued use of the service after changes constitutes acceptance of the new terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                <div className="text-gray-300">
                  <p>If you have any questions about these Terms of Service, please contact us at:</p>
                  <p className="mt-2">
                    <strong className="text-white">Email:</strong> legal@codecraft.dev<br />
                    <strong className="text-white">Address:</strong> CodeCraft Legal Team, 123 Developer St, Code City, CC 12345
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Last Updated */}
          <div className="flex items-center justify-center gap-3 p-6 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-gray-800/50 mt-8">
            <Clock className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">These terms were last updated on June 2025</span>
          </div>
        </div>
      </main>
    </div>
  );
}