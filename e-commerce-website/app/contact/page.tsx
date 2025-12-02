import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - ShopHub",
  description: "Get in touch with ShopHub customer support",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg mb-12">We'd love to hear from you. Get in touch with our team</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="bg-secondary border-border text-foreground" />
              <Input type="email" placeholder="Your Email" className="bg-secondary border-border text-foreground" />
              <Input type="text" placeholder="Subject" className="bg-secondary border-border text-foreground" />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 bg-secondary border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">support@shophub.com</p>
                  <p className="text-muted-foreground text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">1-800-SHOP-HUB</p>
                  <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">123 Main Street</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="font-bold mb-2">FAQ</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our frequently asked questions for quick answers
              </p>
              <Button variant="outline">View FAQ</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
