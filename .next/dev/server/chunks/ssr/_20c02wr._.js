module.exports = [
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "credentials",
    ()=>credentials,
    "pillars",
    ()=>pillars,
    "services",
    ()=>services,
    "siteConfig",
    ()=>siteConfig,
    "stats",
    ()=>stats
]);
const siteConfig = {
    name: 'P8N Defense',
    tagline: 'Government-Grade Protection. Private-Sector Precision.',
    slogan: 'sablutho',
    founder: 'Cyril Paton',
    address: '11 Mignon Place, Morningside, Durban, South Africa',
    email: 'info@p8ndefense.com',
    cell: '+27 82 517 5039',
    office: '+27 31 316 5158',
    website: 'p8ndefense.com',
    url: 'https://www.p8ndefense.com'
};
const services = [
    {
        id: 'close-protection',
        icon: '🛡',
        name: 'Close Protection',
        tagline: 'Your Safety. Our Mission.',
        description: 'Intelligence-led close protection for HNWIs, executives and families. Drone-assisted advance reconnaissance delivers real-time aerial threat mapping before your principal moves.',
        points: [
            'Principal and family protection programmes',
            'Single and multi-operator details',
            'Intelligence-led advance work and threat assessment',
            'Residential and mobile security operations',
            'Travel security across Africa and internationally',
            'Emergency extraction planning and execution',
            'Drone-assisted advance reconnaissance and aerial threat mapping',
            'Advanced offensive and defensive driving trained operators',
            'All operators are trained operational medics and first responders',
            'Female close protection officers available'
        ]
    },
    {
        id: 'aviation-security',
        icon: '✈',
        name: 'Aviation Security',
        tagline: 'Gate to Destination.',
        description: 'End-to-end security for private jet operators and aircraft owners. UAV surveillance of landing zones and FBO perimeters adds a critical aerial layer of threat assessment.',
        points: [
            'Ground and airside security',
            'Pre-flight threat and environment assessment',
            'In-flight security personnel (where required)',
            'FBO and hangar security protocols',
            'Aviation security consulting',
            'UAV aerial perimeter surveillance at FBOs and landing zones'
        ]
    },
    {
        id: 'asset-protection',
        icon: '◆',
        name: 'Asset Protection',
        tagline: 'What You Have Built, We Protect.',
        description: 'Comprehensive threat and vulnerability assessments including drone-based aerial surveys, layered security protocols, and personnel with the discipline and discretion significant assets demand.',
        points: [
            'Estate and residential security design and management',
            'Threat and vulnerability assessments for high-value properties',
            'Art, collection, and valuables protection protocols',
            'Corporate campus security',
            'Security consulting for acquisitions in elevated-risk environments',
            'Drone-based aerial surveys and estate perimeter threat assessment'
        ]
    },
    {
        id: 'event-security',
        icon: '🎯',
        name: 'Event Security',
        tagline: 'Every Event. Zero Incidents.',
        description: 'Full-spectrum security management for major corporate and private events — advance planning, VIP protection, access control, aerial perimeter surveillance, and on-site operational medics.',
        points: [
            'VIP and HNWI close protection within events',
            'Advance threat assessment and venue planning',
            'Access control and crowd management',
            'Drone-assisted aerial perimeter surveillance',
            'Rapid response and emergency extraction',
            'On-site operational medics for immediate first response',
            'Discreet professional operator deployment'
        ]
    },
    {
        id: 'armoured-vehicles',
        icon: '🚗',
        name: 'Armoured Luxury Vehicles',
        tagline: 'Secure Movement. No Compromise.',
        description: 'Armoured luxury vehicle deployment for principals in elevated-risk environments. Discreet, route-planned, and fully integrated with close protection details.',
        points: [
            'Armoured luxury vehicle deployment',
            'Secure chauffeur and motorcade services',
            'Advance route planning and reconnaissance',
            'Integration with close protection details',
            'High-risk environment travel logistics',
            'All drivers trained in advanced offensive and defensive driving'
        ]
    },
    {
        id: 'air-mobility',
        icon: '🚁',
        name: 'Air Mobility — Helicopter & Fixed Wing',
        tagline: 'Rapid. Flexible. Aerial.',
        description: 'Through a formal MoU with a helicopter and fixed-wing operator at Virginia Airport, Durban, P8N Defense provides air mobility for extraction, secure transfer, and aerial reconnaissance.',
        points: [
            'MoU partner: Virginia Airport Durban',
            'Helicopter and fixed-wing capability',
            'Rapid principal extraction and evacuation',
            'Secure air transfers across Southern Africa',
            'Aerial reconnaissance support',
            'Coordinated air-ground operations',
            'Netcare 911 medevac partnership — HEMS based at Virginia Airport, flight doctor and ALS paramedics, 600km effective range'
        ]
    }
];
const pillars = [
    {
        number: '01',
        title: 'Tier-One Capability',
        description: "Every operator from SA's most elite government units. Special operations discipline applied to private principal protection."
    },
    {
        number: '02',
        title: 'Intelligence-Led Protection',
        description: 'Advance threat assessments, route analysis, environment profiling before any principal moves. Protection begins before physical presence.'
    },
    {
        number: '03',
        title: 'Advanced Driving — Offensive & Defensive',
        description: 'All operators trained in advanced offensive and defensive driving. Vehicle-based threats anticipated, countered and controlled.'
    },
    {
        number: '04',
        title: 'Drone-Enabled Aerial Intelligence',
        description: 'UAV technology for aerial threat assessment, perimeter surveillance and real-time environment profiling. Decisive tactical advantage.'
    },
    {
        number: '05',
        title: 'Absolute Discretion',
        description: 'We never disclose clients, operations or methods. Lives and privacy protected with equal rigour. Always.'
    },
    {
        number: '06',
        title: 'African Expertise',
        description: 'Built on the continent. Deep understanding of political, criminal and operational landscape of Africa.'
    },
    {
        number: '07',
        title: 'Operational Medics & First Responders',
        description: 'Every operator is a trained operational medic and first responder. Security and medical capability unified in every deployment.',
        accentGreen: true
    }
];
const credentials = [
    {
        title: 'Ronin SA Close Protection Academy',
        description: 'World-renowned, internationally accredited CP training',
        type: 'gold'
    },
    {
        title: 'United Nations UNDSS Certified',
        description: 'Globally recognised standard in safety and security',
        type: 'gold'
    },
    {
        title: 'BSAFE Certified',
        description: 'UN-standard safety and security certification',
        type: 'gold'
    },
    {
        title: 'Former National Intervention Unit (NIU)',
        description: 'SAPS medium-to-high-risk operations — one of South Africa\'s most demanding law enforcement units',
        type: 'gold'
    },
    {
        title: 'Close Protection Assignments',
        description: 'Extensive local and international experience',
        type: 'gold'
    },
    {
        title: 'Former Special Task Force (STF)',
        description: 'SAPS elite counter-terrorism and hostage rescue unit',
        type: 'standard'
    },
    {
        title: 'Former SAPS Counter Assault Team (CAT)',
        description: 'SAPS VIP protection rapid-response unit',
        type: 'standard'
    },
    {
        title: 'Former South African Special Forces',
        description: 'Military special operations — continental and international deployments',
        type: 'standard'
    },
    {
        title: 'Military Intelligence',
        description: 'Threat analysis and intelligence operations',
        type: 'standard'
    },
    {
        title: 'Female Close Protection Officers',
        description: 'P8N Defense fields trained female close protection officers — for female principals, families with children, and assignments requiring discreet, same-gender placement',
        type: 'gold'
    },
    {
        title: 'Operational Medics & First Responders',
        description: 'Security and medical capability in every deployment',
        type: 'green'
    },
    {
        title: 'Advanced Driving — Offensive & Defensive',
        description: 'Vehicle threats anticipated and countered',
        type: 'green'
    }
];
const stats = [
    {
        value: 'Tier 1',
        label: 'Operator Standard'
    },
    {
        value: '100%',
        label: 'Client Discretion'
    },
    {
        value: '4',
        label: 'Elite Unit Backgrounds'
    },
    {
        value: 'Africa',
        label: 'Deep Operational Knowledge'
    }
];
}),
"[project]/components/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const services = [
    'Close Protection',
    'Aviation Security',
    'Asset Protection',
    'Event Security',
    'Armoured Luxury Vehicles',
    'Air Mobility — Helicopter & Fixed Wing',
    'Referral Partner Enquiry',
    'General Enquiry'
];
const inputClass = 'w-full bg-[#06080a] border border-[#1e2428] text-[#e8dfc8] placeholder-[#4a4840] px-4 py-3 text-sm focus:outline-none focus:border-[#b8960c] transition-colors duration-200';
function ContactForm() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        organisation: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const handleChange = (e)=>{
        setForm((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('sending');
        const body = {
            name: form.name,
            organisation: form.organisation,
            email: form.email,
            phone: form.phone,
            service: form.service,
            message: form.message
        };
        try {
            const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(body)
            });
            if (res.ok) {
                setStatus('success');
                setForm({
                    name: '',
                    organisation: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch  {
            // Fallback to mailto
            const subject = encodeURIComponent(`P8N Defense Enquiry — ${form.service || 'General'}`);
            const bodyText = encodeURIComponent(`Name: ${form.name}\nOrganisation: ${form.organisation}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`);
            window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].email}?subject=${subject}&body=${bodyText}`;
            setStatus('idle');
        }
    };
    if (status === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#0f1114] border border-[#b8960c]/30 p-10 flex flex-col items-center text-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-4xl",
                    children: "✓"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[#e8dfc8] text-2xl font-light",
                    style: {
                        fontFamily: 'var(--font-cormorant), Cormorant Garamond, Georgia, serif'
                    },
                    children: "Enquiry Received"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#7a7060] text-sm max-w-sm",
                    style: {
                        fontFamily: 'var(--font-barlow), Barlow, system-ui'
                    },
                    children: "We will respond to your confidential enquiry within 24 hours."
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ContactForm.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                placeholder: "Full Name *",
                required: true,
                value: form.name,
                onChange: handleChange,
                className: inputClass,
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                }
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                name: "organisation",
                placeholder: "Organisation",
                value: form.organisation,
                onChange: handleChange,
                className: inputClass,
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                }
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                name: "email",
                placeholder: "Email Address *",
                required: true,
                value: form.email,
                onChange: handleChange,
                className: inputClass,
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                }
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                name: "phone",
                placeholder: "Contact Number *",
                required: true,
                value: form.phone,
                onChange: handleChange,
                className: inputClass,
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                }
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "service",
                value: form.service,
                onChange: handleChange,
                className: `${inputClass} ${!form.service ? 'text-[#4a4840]' : 'text-[#e8dfc8]'}`,
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: "Service Required"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    services.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: s,
                            className: "bg-[#0f1114] text-[#e8dfc8]",
                            children: s
                        }, s, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "message",
                placeholder: "Message *",
                required: true,
                rows: 5,
                value: form.message,
                onChange: handleChange,
                className: `${inputClass} resize-none`,
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                }
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#4a4840] text-xs leading-relaxed",
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                },
                children: "All communications are treated with absolute confidentiality. P8N Defense does not disclose client information, enquiries, or operational details under any circumstances."
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: status === 'sending',
                className: "bg-[#b8960c] hover:bg-[#d4ac0e] disabled:opacity-50 text-[#06080a] font-medium tracking-wider uppercase text-sm px-8 py-4 transition-all duration-200 w-full",
                style: {
                    fontFamily: 'var(--font-barlow), Barlow, system-ui'
                },
                children: status === 'sending' ? 'Sending...' : 'Submit Confidential Enquiry'
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_20c02wr._.js.map