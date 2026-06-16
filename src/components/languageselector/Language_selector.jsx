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
        language: {
          code: "en-US",
          name: "English",
        },
      },
      {
        country: "Canada",
        flag: "🇨🇦",
        language: {
          code: "en-CA",
          name: "English",
        },
      },
      {
        country: "Brazil",
        flag: "🇧🇷",
        language: {
          code: "pt-BR",
          name: "Português",
        },
      },
    ],
  },
  {
    regionGroup: "Europe",
    items: [
      {
        country: "United Kingdom",
        flag: "🇬🇧",
        language: {
          code: "en-GB",
          name: "English",
        },
      },
      {
        country: "France",
        flag: "🇫🇷",
        language: {
          code: "fr-FR",
          name: "Français",
        },
      },
      {
        country: "Germany",
        flag: "🇩🇪",
        language: {
          code: "de-DE",
          name: "Deutsch",
        },
      },
    ],
  },
  {
    regionGroup: "Asia Pacific",
    items: [
      {
        country: "India",
        flag: "🇮🇳",
        language: {
          code: "en-IN",
          name: "English",
        },
      },
      {
        country: "Japan",
        flag: "🇯🇵",
        language: {
          code: "ja-JP",
          name: "日本語",
        },
      },
      {
        country: "China",
        flag: "🇨🇳",
        language: {
          code: "zh-CN",
          name: "简体中文",
        },
      },
    ],
  },
];

export default function LanguageSelector() {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState({
    regionGroup: "Asia Pacific",
    country: "India",
    flag: "🇮🇳",
    language: {
      code: "en-IN",
      name: "English",
    },
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

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleSelect = (regionGroup, item) => {
    setSelected({
      regionGroup,
      ...item,
    });

    setIsOpen(false);

    // Add routing logic here
    // router.push(...)
  };

  const toggleRegion = (region) => {
    setOpenRegion((prev) =>
      prev === region ? null : region
    );
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-gray-200
          bg-white
          px-4 py-2
          text-sm font-medium text-gray-700
          shadow-sm
          transition-all duration-200
          hover:border-gray-300
          hover:bg-gray-50
          hover:shadow-md
        "
      >
        <Globe className="h-4 w-4 text-gray-600" />

        <span className="hidden sm:flex items-center gap-2">
          <span>{selected.country}</span>

          <span className="text-gray-300">|</span>

          <span className="uppercase text-gray-500 text-xs font-semibold">
            {selected.language.code.split("-")[0]}
          </span>
        </span>

        <span className="sm:hidden">
          {selected.language.code.split("-")[0]}
        </span>

        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute right-0 z-50 mt-3
            w-[380px]
            overflow-hidden
            rounded-2xl
            border border-gray-200
            bg-white
            shadow-xl
          "
        >
          {/* Header */}
          <div className="border-b border-gray-100 px-5 py-4">
            <h3 className="text-sm font-semibold text-gray-900">
              Select Region & Language
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Choose your preferred locale
            </p>
          </div>

          <div className="max-h-[450px] overflow-y-auto">
            {regionalLocales.map((group) => {
              const isExpanded =
                openRegion === group.regionGroup;

              return (
                <div
                  key={group.regionGroup}
                  className="border-b border-gray-100 last:border-0"
                >
                  {/* Region Accordion Header */}
                  <button
                    type="button"
                    onClick={() =>
                      toggleRegion(group.regionGroup)
                    }
                    className="
                      flex w-full items-center justify-between
                      bg-gray-50
                      px-5 py-3
                      text-left
                      transition-colors
                      hover:bg-gray-100
                    "
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {group.regionGroup}
                      </p>

                      <p className="text-xs text-gray-500">
                        {group.items.length} countries
                      </p>
                    </div>

                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Countries */}
                  {isExpanded && (
                    <div className="py-1">
                      {group.items.map((item) => {
                        const isSelected =
                          selected.country ===
                            item.country &&
                          selected.language.code ===
                            item.language.code;

                        return (
                          <button
                            key={item.language.code}
                            type="button"
                            onClick={() =>
                              handleSelect(
                                group.regionGroup,
                                item
                              )
                            }
                            className={`
                              flex w-full items-center justify-between
                              px-5 py-3
                              text-left
                              transition-colors
                              ${
                                isSelected
                                  ? "bg-blue-50"
                                  : "hover:bg-gray-50"
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
                                      ? "text-blue-700"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {item.country}
                                </p>

                                <p className="text-xs text-gray-500">
                                  {item.language.name}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check className="h-4 w-4 text-blue-600" />
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