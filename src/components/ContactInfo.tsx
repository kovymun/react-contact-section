import { mediCentreDB } from "../data/medi-centre-db";
import {
  Stethoscope,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

const ContactInfo = () => {
  const { hours } = mediCentreDB;

  // Pull the first entry from each section array
  const hoursSection = hours[0];

  // Pull the nested content arrays
  const hoursContent = hoursSection.hour_content;

  return (
    <div className="relative bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-[0_32px_64px_-12px_rgba(0,53,85,0.12)] flex flex-col gap-10">
      <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-linear-to-br from-blue-200/60 to-cyan-100/60 blur-2xl pointer-events-none" />
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Stethoscope className="text-blue-900 w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400">
            Clinical Sanctuary
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-blue-900 leading-tight">
          Riverside Medical Centre
        </h2>
        <p className="text-slate-500 mt-3 leading-relaxed text-sm">
          A high end, editorial approach to wellness, where your peace of mind
          is treated with the same care as your physical health.
        </p>
      </div>

      {/* Hours */}
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-11 h-11 rounded-2xl bg-blue-900/8 flex items-center justify-center border border-blue-100">
          <Clock className="w-5 h-5 text-blue-700" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">
            Consulting Hours
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {hoursContent.map(({ id, text }) => {
              const [label, time] = text.split(": ");
              return (
                <li key={id} className="flex justify-between gap-8">
                  <span>{label}</span>
                  <span className="font-semibold text-blue-900">{time}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-11 h-11 rounded-2xl bg-blue-900/8 flex items-center justify-center border border-blue-100">
          <MapPin className="w-5 h-5 text-blue-700" />
        </div>
        <div className="w-full">
          <h3 className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">
            Location
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            102 Willowbend Road
            <br />
            Westwood, Cape Town 7700
          </p>
          <div className="mt-4 rounded-2xl overflow-hidden h-32 bg-linear-to-br from-slate-100 to-blue-50 flex items-center justify-center border border-slate-200">
            <MapPin className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="flex items-start gap-5">
        <div className="shrink-0 w-11 h-11 rounded-2xl bg-blue-900/8 flex items-center justify-center border border-blue-100">
          <ShieldCheck className="w-5 h-5 text-blue-700" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">
            Contact
          </h3>
          <div className="space-y-3">
            {[
              {
                icon: <Phone className="w-4 h-4" />,
                label: "(021) 123 4568",
                href: "tel:0211234568",
              },
              {
                icon: <MessageCircle className="w-4 h-4" />,
                label: "WhatsApp +27 82 123 4568",
                href: "#",
              },
              {
                icon: <Mail className="w-4 h-4" />,
                label: "info@riversidemed.co.za",
                href: "mailto:info@riversidemed.co.za",
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-600 transition-colors duration-200"
              >
                <span className="text-blue-400">{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
