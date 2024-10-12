import React from 'react'
import { Link } from 'react-router-dom' // React Router Link
import { Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react' // Lucide React icons

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="hover:underline"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/patients"
                                    className="hover:underline"
                                >
                                    Patient Records
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/appointments"
                                    className="hover:underline"
                                >
                                    Appointments
                                </Link>
                            </li>
                            <li>
                                <Link to="/reports" className="hover:underline">
                                    Reports
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/help" className="hover:underline">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/training"
                                    className="hover:underline"
                                >
                                    Training Materials
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/support" className="hover:underline">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/hipaa" className="hover:underline">
                                    HIPAA Compliance
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/security"
                                    className="hover:underline"
                                >
                                    Data Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Mail className="mr-2 h-4 w-4" />
                                <a
                                    href="mailto:support@patientrecords.com"
                                    className="hover:underline"
                                >
                                    support@patientrecords.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-2 h-4 w-4" />
                                <a
                                    href="tel:+1234567890"
                                    className="hover:underline"
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="#"
                                className="hover:text-secondary-foreground"
                            >
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="#"
                                className="hover:text-secondary-foreground"
                            >
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="#"
                                className="hover:text-secondary-foreground"
                            >
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
                    <p>
                        &copy; {new Date().getFullYear()} Patient Record Keeping
                        System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
