"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

const regionalLocales = [
  {
    regionGroup: "Americas",
    items: [
      {
        country: "United States",
        flag: "🇺🇸",
        language: { code: "en-US", name: "English" },
      },
      {
        country: "Canada",
        flag: "🇨🇦",
        language: { code: "en-CA", name: "English" },
      },
      {
        country: "Brazil",
        flag: "🇧🇷",
        language: { code: "pt-BR", name: "Português" },
      },
    ],
  },
  {
    regionGroup: "Europe",
    items: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        language: { code: "en-GB", name: "English" },
      },
      {
        country: "France",
        flag: "🇫🇷",
        language: { code: "fr-FR", name: "Français" },
      },
      {
        country: "Germany",
        flag: "🇩🇪",
        language: { code: "de-DE", name: "Deutsch" },
      },
    ],
  },
  {
    regionGroup: "Asia Pacific",
    items: [
      {
        country: "India",
        flag: "🇮🇳",
        language: { code: "en-IN", name: "English" },
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        language: { code: "ja-JP", name: "日本語" },
      },
      {
        country: "China",
        flag: "🇨🇳",
        language: { code: "zh-CN", name: "简体中文" },
      },
    ],
  },
];

export default function LanguageSelector({ isNavbarLight }) {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState({
    regionGroup: "Asia Pacific",
    country: "India",
    flag: "🇮🇳",
    language: { code: "en-IN", name: "English" },
  });

  const [openRegion, setOpenRegion] = useState("Asia Pacific");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (regionGroup, item) => {
    setSelected({ regionGroup, ...item });
    setIsOpen(false);
  };

  const toggleRegion = (region) => {
    setOpenRegion((prev) => (prev === region ? null : region));
  };

  const glassBase =
    "backdrop-blur-md border transition-all duration-300 ease-in-out";

  const themeClass = isNavbarLight
    ? "bg-white/80 border-gray-200/30 text-gray-800 shadow-md"
    : "bg-white/10 border-white/20 text-white";

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          inline-flex items-center gap-2
          px-4 py-2 rounded-xl
          ${glassBase}
          ${themeClass}
          hover:scale-105 active:scale-95
          hover:shadow-lg
        `}
      >
        <Globe className="h-4 w-4" />

        <span className="hidden sm:flex items-center gap-2 text-sm">
          <span>{selected.country}</span>
          <span className="opacity-40">|</span>
          <span className="uppercase text-xs font-semibold opacity-70">
            {selected.language.code.split("-")[0]}
          </span>
        </span>

        <span className="sm:hidden text-xs uppercase">
          {selected.language.code.split("-")[0]}
        </span>

        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`
            absolute right-0 z-50 mt-3
            w-[380px]
            overflow-hidden
            rounded-2xl
            ${glassBase}
            ${themeClass}
            shadow-2xl
          `}
        >
          {/* Header */}
          <div className="border-b border-white/10 px-5 py-4">
            <h3 className="text-sm font-semibold">
              Select Region & Language
            </h3>
            <p className="text-xs opacity-70 mt-1">
              Choose your preferred locale
            </p>
          </div>

          <div className="max-h-[450px] overflow-y-auto">
            {regionalLocales.map((group) => {
              const isExpanded = openRegion === group.regionGroup;

              return (
                <div
                  key={group.regionGroup}
                  className="border-b border-white/10 last:border-0"
                >
                  {/* Region */}
                  <button
                    type="button"
                    onClick={() => toggleRegion(group.regionGroup)}
                    className="flex w-full justify-between px-5 py-3 hover:bg-white/10 transition"
                  >
                    <div>
                      <p className="text-sm font-semibold">
                        {group.regionGroup}
                      </p>
                      <p className="text-xs opacity-60">
                        {group.items.length} countries
                      </p>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Countries */}
                  {isExpanded && (
                    <div className="py-1">
                      {group.items.map((item) => {
                        const isSelected =
                          selected.country === item.country &&
                          selected.language.code === item.language.code;

                        return (
                          <button
                            key={item.language.code}
                            onClick={() =>
                              handleSelect(group.regionGroup, item)
                            }
                            className={`
                              flex w-full items-center justify-between
                              px-5 py-3
                              transition-colors duration-200
                              ${
                                isSelected
                                  ? "bg-white/10"
                                  : "hover:bg-white/5"
                              }
                            `}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">
                                {item.flag}
                              </span>

                              <div>
                                <p
                                  className={`text-sm font-medium ${
                                    isSelected
                                      ? "opacity-100"
                                      : "opacity-90"
                                  }`}
                                >
                                  {item.country}
                                </p>

                                <p className="text-xs opacity-60">
                                  {item.language.name}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check className="h-4 w-4" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}