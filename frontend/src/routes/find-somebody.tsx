import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Eye,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  User,
  Compass,
  Building2,
  Landmark,
  X,
  ExternalLink,
  Flame,
  Award,
  ChevronRight,
  Printer,
  Calendar,
  Share2,
} from "lucide-react";

import { GlassLayout, PageHeading } from "@/components/GlassLayout";
import { PROFILES, type BiodataProfile } from "@/data/profiles";

export const Route = createFileRoute("/find-somebody")({
  head: () => ({
    meta: [
      { title: "Find Somebody | Matrimony Biodatas & Profiles | Calculate my Dahej" },
      {
        name: "description",
        content:
          "Browse verified Indian matrimony biodatas with authentic photographs, comprehensive family background, Kundali horoscope, education, and AI valuation compatibility.",
      },
      {
        property: "og:title",
        content: "Find Somebody | Verified Matrimony Biodatas",
      },
      {
        property: "og:description",
        content:
          "Explore authentic brides and grooms profiles with complete biodata details and AI Dahej valuation estimates.",
      },
    ],
  }),
  component: FindSomebodyPage,
});

export function FindSomebodyPage() {
  const [selectedGender, setSelectedGender] = useState<"all" | "female" | "male">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedDiet, setSelectedDiet] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"featured" | "age-asc" | "income-desc" | "valuation-desc">("featured");

  const [activeProfile, setActiveProfile] = useState<BiodataProfile | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"personal" | "career" | "family" | "lifestyle">("personal");
  const [shortlistedIds, setShortlistedIds] = useState<Set<string>>(new Set());
  const [contactRevealed, setContactRevealed] = useState<Record<string, boolean>>({});

  const toggleShortlist = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setShortlistedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const industries = useMemo(() => {
    const set = new Set<string>();
    PROFILES.forEach((p) => set.add(p.profession.industry));
    return Array.from(set);
  }, []);

  const filteredProfiles = useMemo(() => {
    return PROFILES.filter((profile) => {
      // Gender filter
      if (selectedGender !== "all" && profile.gender !== selectedGender) {
        return false;
      }
      // Industry filter
      if (selectedIndustry !== "all" && profile.profession.industry !== selectedIndustry) {
        return false;
      }
      // Diet filter
      if (selectedDiet !== "all" && profile.lifestyle.diet !== selectedDiet) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = profile.name.toLowerCase().includes(q);
        const matchesRole = profile.profession.role.toLowerCase().includes(q);
        const matchesCompany = profile.profession.company.toLowerCase().includes(q);
        const matchesCity = profile.location.city.toLowerCase().includes(q);
        const matchesCaste = profile.caste.toLowerCase().includes(q);
        const matchesDegree = profile.education.degree.toLowerCase().includes(q);
        const matchesInstitution = profile.education.institution.toLowerCase().includes(q);
        if (!matchesName && !matchesRole && !matchesCompany && !matchesCity && !matchesCaste && !matchesDegree && !matchesInstitution) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "featured") {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      }
      if (sortBy === "age-asc") {
        return Number(a.age) - Number(b.age);
      }
      if (sortBy === "income-desc") {
        return b.annualIncomeLPA - a.annualIncomeLPA;
      }
      if (sortBy === "valuation-desc") {
        return b.estimatedValuationINR - a.estimatedValuationINR;
      }
      return 0;
    });
  }, [selectedGender, selectedIndustry, selectedDiet, searchQuery, sortBy]);

  const girlsCount = PROFILES.filter((p) => p.gender === "female").length;
  const boysCount = PROFILES.filter((p) => p.gender === "male").length;

  return (
    <GlassLayout>
      <div className="space-y-8">
        {/* Page Heading & Hero Banner */}
        <div className="relative overflow-hidden rounded-[24px] border border-primary/20 bg-gradient-to-r from-primary/10 via-amber-500/10 to-primary/5 p-6 sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Verified Matrimony & Biodata Directory
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl text-foreground">
              Find Somebody Special
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Explore authentic matrimony biodatas complete with real portrait photography, comprehensive family lineage, educational pedigree, Kundali horoscope, and instant valuation compatibility.
            </p>

            {/* Quick Stat Highlights */}
            <div className="mt-6 flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2.5 rounded-xl border border-primary/20 bg-card/80 px-4 py-2.5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary font-black text-sm">
                  18
                </span>
                <div className="text-left text-xs">
                  <p className="font-bold text-foreground">Active Profiles</p>
                  <p className="text-muted-foreground">12 Brides · 6 Grooms</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-primary/20 bg-card/80 px-4 py-2.5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 font-black text-sm">
                  100%
                </span>
                <div className="text-left text-xs">
                  <p className="font-bold text-foreground">Full Biodatas</p>
                  <p className="text-muted-foreground">Kundali & Family Verified</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-primary/20 bg-card/80 px-4 py-2.5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 text-amber-700 font-black text-sm">
                  ⚡
                </span>
                <div className="text-left text-xs">
                  <p className="font-bold text-foreground">AI Valuation</p>
                  <p className="text-muted-foreground">Ridge + NN Ensemble</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="glass p-5 sm:p-6 space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Gender Switcher Tabs */}
            <div className="inline-flex rounded-xl border border-primary/20 bg-muted/60 p-1.5">
              <button
                onClick={() => setSelectedGender("all")}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  selectedGender === "all"
                    ? "gradient-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Profiles ({PROFILES.length})
              </button>
              <button
                onClick={() => setSelectedGender("female")}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  selectedGender === "female"
                    ? "gradient-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Brides / Girls ({girlsCount})
              </button>
              <button
                onClick={() => setSelectedGender("male")}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                  selectedGender === "male"
                    ? "gradient-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Grooms / Boys ({boysCount})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, role, college, city, or caste..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-input bg-card/90 pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Secondary Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border/50 text-xs">
            <div className="flex items-center gap-1.5 text-muted-foreground font-semibold">
              <SlidersHorizontal className="h-3.5 w-3.5 text-primary" />
              <span>Filters:</span>
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="rounded-lg border border-input bg-card/80 px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Industries</option>
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>

            {/* Diet Filter */}
            <select
              value={selectedDiet}
              onChange={(e) => setSelectedDiet(e.target.value)}
              className="rounded-lg border border-input bg-card/80 px-3 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Diets</option>
              <option value="Vegetarian">Strict Vegetarian</option>
              <option value="Eggetarian">Eggetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>

            {/* Sort Dropdown */}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-muted-foreground font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-lg border border-input bg-card/80 px-3 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="featured">Featured / Verified First</option>
                <option value="age-asc">Age: Youngest First</option>
                <option value="income-desc">Package: High to Low</option>
                <option value="valuation-desc">Valuation: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Profile Results Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <p className="text-sm font-semibold text-muted-foreground">
              Showing <span className="text-foreground font-bold">{filteredProfiles.length}</span> profiles
              {selectedGender !== "all" && ` (${selectedGender === "female" ? "Brides" : "Grooms"})`}
            </p>
            {shortlistedIds.size > 0 && (
              <span className="text-xs font-bold text-primary flex items-center gap-1">
                <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
                {shortlistedIds.size} Shortlisted
              </span>
            )}
          </div>

          {filteredProfiles.length === 0 ? (
            <div className="glass p-12 text-center rounded-2xl">
              <User className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-3 text-lg font-bold text-foreground">No profiles match your filter criteria</h3>
              <p className="mt-1 text-sm text-muted-foreground">Try resetting the filters or clearing the search terms.</p>
              <button
                onClick={() => {
                  setSelectedGender("all");
                  setSelectedIndustry("all");
                  setSelectedDiet("all");
                  setSearchQuery("");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl gradient-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProfiles.map((profile) => {
                const isShortlisted = shortlistedIds.has(profile.id);
                return (
                  <div
                    key={profile.id}
                    onClick={() => setActiveProfile(profile)}
                    className="glass glass-lift group cursor-pointer overflow-hidden rounded-[20px] border border-primary/20 bg-card/85 transition-all hover:border-primary/40 flex flex-col justify-between"
                  >
                    <div>
                      {/* Photo & Badges Container */}
                      <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-muted/40">
                        <img
                          src={profile.photo}
                          alt={profile.photoAlt}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-md backdrop-blur-md ${
                              profile.gender === "female"
                                ? "bg-pink-600/90 text-white"
                                : "bg-blue-600/90 text-white"
                            }`}
                          >
                            {profile.gender === "female" ? "Bride Profile" : "Groom Profile"}
                          </span>

                          <button
                            onClick={(e) => toggleShortlist(profile.id, e)}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform hover:scale-110"
                            title={isShortlisted ? "Remove from shortlist" : "Shortlist profile"}
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                isShortlisted ? "fill-rose-500 text-rose-500" : "text-white"
                              }`}
                            />
                          </button>
                        </div>

                        {/* Bottom Photo Overlay Info */}
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-extrabold tracking-tight drop-shadow-md">
                              {profile.name}
                            </h3>
                            {profile.verified && (
                              <CheckCircle2 className="h-5 w-5 text-emerald-400 drop-shadow fill-emerald-400/20" />
                            )}
                          </div>
                          <p className="text-xs font-medium text-white/90 drop-shadow">
                            {profile.age} yrs · {profile.height} · {profile.location.city}
                          </p>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-4 sm:p-5 space-y-3.5">
                        {/* Key Highlight Pill */}
                        <div className="rounded-lg bg-primary/10 border border-primary/20 px-2.5 py-1.5 text-[11px] font-bold text-primary flex items-center gap-1.5">
                          <Award className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{profile.keyHighlight}</span>
                        </div>

                        {/* Profession & Education */}
                        <div className="space-y-1.5 text-xs">
                          <div className="flex items-start gap-2 text-foreground font-semibold">
                            <Briefcase className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="truncate">
                              {profile.profession.role} <span className="text-muted-foreground font-normal">at {profile.profession.company}</span>
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <GraduationCap className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />
                            <span className="truncate">{profile.education.degree} ({profile.education.institution})</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary/70 shrink-0" />
                            <span>Native: {profile.family.nativePlace}</span>
                          </div>
                        </div>

                        {/* Cultural & Kundali Metadata Grid */}
                        <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted/40 p-2.5 text-[11px]">
                          <div>
                            <span className="text-muted-foreground">Community:</span>
                            <p className="font-bold text-foreground truncate">{profile.caste}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Kundali / Gotra:</span>
                            <p className="font-bold text-foreground truncate">
                              {profile.manglik} · {profile.gotra}
                            </p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Annual Income:</span>
                            <p className="font-extrabold text-emerald-700">{profile.incomeDisplay}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Diet & Habits:</span>
                            <p className="font-bold text-foreground truncate">{profile.lifestyle.diet}</p>
                          </div>
                        </div>

                        {/* AI Estimated Valuation Badge */}
                        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                              Estimated Dahej Valuation
                            </p>
                            <p className="text-base font-black text-amber-900">
                              ₹{(profile.estimatedValuationINR / 100000).toFixed(1)} Lakhs
                            </p>
                          </div>
                          <span className="rounded-md bg-amber-600/20 px-2 py-1 text-[10px] font-extrabold text-amber-900">
                            {profile.valuationTier}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="p-4 sm:p-5 pt-0 flex items-center gap-2">
                      <button
                        onClick={() => setActiveProfile(profile)}
                        className="flex-1 rounded-xl gradient-primary py-2.5 text-xs font-bold text-primary-foreground shadow flex items-center justify-center gap-1.5 hover:opacity-95 transition-opacity"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        View Full Biodata
                      </button>

                      <Link
                        to="/predictor"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-xl border border-primary/30 bg-card py-2.5 px-3 text-xs font-bold text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-1"
                        title="Simulate valuation in Calculator"
                      >
                        <Flame className="h-3.5 w-3.5 text-primary" />
                        Value
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Full Biodata Modal */}
        {activeProfile && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in"
            onClick={() => setActiveProfile(null)}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[24px] border border-primary/30 bg-card/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProfile(null)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted/80 text-foreground hover:bg-destructive hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col gap-6 border-b border-border/70 pb-6 sm:flex-row sm:items-center">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-lg">
                  <img
                    src={activeProfile.photo}
                    alt={activeProfile.photoAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                        activeProfile.gender === "female"
                          ? "bg-pink-500/15 text-pink-700 border border-pink-500/30"
                          : "bg-blue-500/15 text-blue-700 border border-blue-500/30"
                      }`}
                    >
                      {activeProfile.gender === "female" ? "Bride Profile" : "Groom Profile"}
                    </span>
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-500/30">
                      ID: {activeProfile.id.toUpperCase()}
                    </span>
                    <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-500/30">
                      {activeProfile.valuationTier}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                    {activeProfile.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {activeProfile.profession.role} · {activeProfile.profession.company} · {activeProfile.location.city}, {activeProfile.location.state}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleShortlist(activeProfile.id)}
                    className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                      shortlistedIds.has(activeProfile.id)
                        ? "border-rose-400 bg-rose-500/15 text-rose-600"
                        : "border-border bg-card text-foreground hover:bg-muted"
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        shortlistedIds.has(activeProfile.id) ? "fill-rose-500 text-rose-500" : ""
                      }`}
                    />
                    {shortlistedIds.has(activeProfile.id) ? "Shortlisted" : "Shortlist"}
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3.5 py-2 text-xs font-bold text-foreground hover:bg-muted"
                    title="Print Biodata Sheet"
                  >
                    <Printer className="h-4 w-4" />
                    Print
                  </button>
                </div>
              </div>

              {/* Biodata Navigation Tabs */}
              <div className="mt-6 flex flex-wrap gap-2 border-b border-border/70 pb-3">
                {[
                  { id: "personal", label: "Personal & Kundali" },
                  { id: "career", label: "Education & Career" },
                  { id: "family", label: "Family & Heritage" },
                  { id: "lifestyle", label: "Lifestyle & Expectations" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveModalTab(tab.id as any)}
                    className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                      activeModalTab === tab.id
                        ? "gradient-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="mt-6">
                {activeModalTab === "personal" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Age & Height</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.age} Years · {activeProfile.height}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Date & Time of Birth</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.dob} at {activeProfile.timeOfBirth}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Place of Birth</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.placeOfBirth}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Rashi (Moon Sign)</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.rashi}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Nakshatra</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.nakshatra}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Manglik Status</span>
                        <p className="mt-1 text-sm font-bold text-primary">{activeProfile.manglik}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Gotra</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.gotra}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Religion & Community</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.religion} · {activeProfile.caste}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-3.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Mother Tongue</span>
                        <p className="mt-1 text-sm font-bold text-foreground">{activeProfile.motherTongue}</p>
                      </div>
                    </div>

                    {/* About Statement */}
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                      <h4 className="text-sm font-extrabold uppercase tracking-wide text-primary">About {activeProfile.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">{activeProfile.aboutMe}</p>
                    </div>
                  </div>
                )}

                {activeModalTab === "career" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                          <GraduationCap className="h-4 w-4" />
                          Educational Background
                        </div>
                        <h4 className="text-base font-extrabold text-foreground">{activeProfile.education.degree}</h4>
                        <p className="text-xs text-muted-foreground">Institute: <span className="text-foreground font-semibold">{activeProfile.education.institution}</span></p>
                        <p className="text-xs text-muted-foreground">Field: <span className="text-foreground font-semibold">{activeProfile.education.field}</span></p>
                        <span className="inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          Degree Level: {activeProfile.education.level}
                        </span>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2">
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                          <Briefcase className="h-4 w-4" />
                          Professional Role & Company
                        </div>
                        <h4 className="text-base font-extrabold text-foreground">{activeProfile.profession.role}</h4>
                        <p className="text-xs text-muted-foreground">Organization: <span className="text-foreground font-semibold">{activeProfile.profession.company}</span></p>
                        <p className="text-xs text-muted-foreground">Industry: <span className="text-foreground font-semibold">{activeProfile.profession.industry}</span></p>
                        <p className="text-xs text-muted-foreground">Experience: <span className="text-foreground font-semibold">{activeProfile.profession.experienceYears} Years ({activeProfile.profession.workMode})</span></p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Annual CTC / Compensation</span>
                        <p className="text-2xl font-black text-emerald-950">{activeProfile.incomeDisplay}</p>
                      </div>
                      <div className="text-xs text-emerald-900 sm:text-right">
                        <p className="font-semibold">Income Bracket: Top Tier Professional</p>
                        <p className="text-emerald-800/80">Verified Form 16 / ITR Equivalent</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeModalTab === "family" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Father</span>
                        <h4 className="text-sm font-bold text-foreground">{activeProfile.family.father}</h4>
                        <p className="text-xs text-muted-foreground">{activeProfile.family.fatherOccupation}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Mother</span>
                        <h4 className="text-sm font-bold text-foreground">{activeProfile.family.mother}</h4>
                        <p className="text-xs text-muted-foreground">{activeProfile.family.motherOccupation}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Siblings</span>
                        <p className="text-xs font-semibold text-foreground">{activeProfile.family.siblings}</p>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-1.5">
                        <span className="text-[11px] font-semibold text-muted-foreground uppercase">Family Type & Values</span>
                        <p className="text-xs font-semibold text-foreground">{activeProfile.family.familyType} Family · {activeProfile.family.familyValues} Values</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase">
                        <Landmark className="h-4 w-4" />
                        Family Assets & Native Background
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Native Ancestral Place: <span className="font-bold text-foreground">{activeProfile.family.nativePlace}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Real Estate & Assets: <span className="font-semibold text-foreground">{activeProfile.family.familyAssets}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Estimated Family Net Worth: <span className="font-bold text-emerald-700">{activeProfile.family.familyNetWorth}</span>
                      </p>
                    </div>
                  </div>
                )}

                {activeModalTab === "lifestyle" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Diet & Daily Routine</span>
                        <p className="text-xs text-foreground"><span className="font-semibold">Dietary Habit:</span> {activeProfile.lifestyle.diet}</p>
                        <p className="text-xs text-foreground"><span className="font-semibold">Fitness Regimen:</span> {activeProfile.lifestyle.fitness}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {activeProfile.lifestyle.habits.map((h, i) => (
                            <span key={i} className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl border border-border/70 bg-muted/30 p-4 space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Hobbies & Interests</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {activeProfile.lifestyle.hobbies.map((h, i) => (
                            <span key={i} className="rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-[11px] font-bold text-primary">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Partner Expectations */}
                    <div className="rounded-2xl border border-border/70 bg-muted/20 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Partner Expectations</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">{activeProfile.partnerExpectations}</p>
                    </div>

                    {/* Contact & Inquiry Section */}
                    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-extrabold text-foreground">Direct Contact & Guardian Details</h4>
                          <p className="text-xs text-muted-foreground">Managed by: <span className="font-bold text-foreground">{activeProfile.contact.managedBy}</span></p>
                        </div>

                        {contactRevealed[activeProfile.id] ? (
                          <div className="flex flex-col sm:items-end gap-1 text-xs">
                            <span className="flex items-center gap-1.5 font-bold text-foreground">
                              <Phone className="h-3.5 w-3.5 text-primary" /> {activeProfile.contact.phone}
                            </span>
                            <span className="flex items-center gap-1.5 font-bold text-foreground">
                              <Mail className="h-3.5 w-3.5 text-primary" /> {activeProfile.contact.email}
                            </span>
                          </div>
                        ) : (
                          <button
                            onClick={() =>
                              setContactRevealed((prev) => ({ ...prev, [activeProfile.id]: true }))
                            }
                            className="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            View Contact Numbers
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/70 pt-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Estimated Fair Valuation:</span>
                  <span className="text-lg font-black text-amber-900">
                    ₹{(activeProfile.estimatedValuationINR / 100000).toFixed(1)} Lakhs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/predictor"
                    className="inline-flex items-center gap-1.5 rounded-xl gradient-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow"
                  >
                    <Flame className="h-4 w-4" />
                    Open in Dahej Calculator
                  </Link>
                  <button
                    onClick={() => setActiveProfile(null)}
                    className="rounded-xl border border-input bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </GlassLayout>
  );
}

