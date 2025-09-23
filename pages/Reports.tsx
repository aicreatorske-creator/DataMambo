
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { Platform } from '../types';
import { platformIcons } from '../constants';

const periodOptions = [
    { id: '7d', label: 'Last 7 Days' },
    { id: '30d', label: 'Last 30 Days' },
    { id: '90d', label: 'Last 90 Days' },
];

const Reports: React.FC = () => {
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Platform.Instagram);
    const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d');
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const [reportReady, setReportReady] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const SelectedPlatformIcon = platformIcons[selectedPlatform];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    const handlePlatformSelect = (platform: Platform) => {
        setSelectedPlatform(platform);
        setIsDropdownOpen(false);
        setReportReady(false);
    };
    
    const handlePeriodSelect = (period: '7d' | '30d' | '90d') => {
        setSelectedPeriod(period);
        setReportReady(false);
    }

    const handleGenerateReport = () => {
        if (isGenerating) return;
        
        setIsGenerating(true);
        setReportReady(false);

        setTimeout(() => {
            setIsGenerating(false);
            setReportReady(true);
        }, 2500); // Simulate report generation time
    };
    
    const handleDownload = () => {
        // In a real app, this would trigger a PDF download.
        alert(`Downloading report for ${selectedPlatform} - ${periodOptions.find(p => p.id === selectedPeriod)?.label}... (This is a simulation)`);
    };

    return (
        <div className="p-6 space-y-8">
            <Header title="Reports" description="Generate and download performance summaries for your accounts." showPlatformSelector={false} />

            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Configuration Card */}
                <div className="bg-surface p-8 rounded-xl shadow-lg h-fit">
                    <h3 className="text-xl font-bold text-on-surface mb-6">Report Configuration</h3>
                    <div className="space-y-6">
                        {/* Platform Selector */}
                        <div>
                            <label className="block text-sm font-medium text-on-surface-secondary mb-2">Platform</label>
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full flex items-center justify-between bg-background border border-gray-600 rounded-lg py-3 px-4 text-on-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface focus:ring-primary"
                                    aria-haspopup="listbox" aria-expanded={isDropdownOpen}
                                >
                                    <span className="flex items-center space-x-2">
                                        <SelectedPlatformIcon className="w-5 h-5" />
                                        <span className="font-medium">{selectedPlatform}</span>
                                    </span>
                                    <ChevronDownIcon className={`w-5 h-5 text-on-surface-secondary transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <div
                                    className={`absolute mt-2 w-full origin-top-right bg-surface rounded-lg shadow-2xl ring-1 ring-white/5 focus:outline-none z-10 transition-all duration-150 ease-out ${
                                        isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                                    }`}
                                    role="listbox"
                                >
                                    <div className="p-1">
                                        {Object.values(Platform).map(p => {
                                            const PlatformIcon = platformIcons[p];
                                            return (
                                                <button key={p} onClick={() => handlePlatformSelect(p)}
                                                    className="w-full text-left flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-150 text-on-surface-secondary hover:bg-white/10 hover:text-on-surface"
                                                    role="option"
                                                >
                                                    <PlatformIcon className="w-5 h-5" />
                                                    <span>{p}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Period Selector */}
                        <div>
                            <label className="block text-sm font-medium text-on-surface-secondary mb-2">Period</label>
                            <div className="flex items-center space-x-2 bg-background p-1 rounded-full">
                                {periodOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handlePeriodSelect(option.id as '7d'|'30d'|'90d')}
                                        className={`w-full px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                                            selectedPeriod === option.id
                                                ? 'bg-primary text-white shadow-md'
                                                : 'text-on-surface-secondary hover:text-on-surface'
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={handleGenerateReport}
                        disabled={isGenerating}
                        className="mt-8 w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                        {isGenerating ? <SpinnerIcon /> : <DocumentDownloadIcon className="w-5 h-5" />}
                        <span>{isGenerating ? 'Generating...' : 'Generate Report'}</span>
                    </button>
                </div>

                {/* Status/Download Card */}
                <div className="bg-surface p-8 rounded-xl shadow-lg flex items-center justify-center">
                    {!isGenerating && !reportReady && (
                        <div className="text-center text-on-surface-secondary">
                             <DocumentReportIcon className="w-16 h-16 mx-auto mb-4" />
                             <h4 className="text-lg font-semibold text-on-surface">Ready to Generate</h4>
                             <p className="mt-1 text-sm">Configure your report and click 'Generate Report' to begin.</p>
                        </div>
                    )}
                    {isGenerating && (
                        <div className="text-center text-on-surface-secondary">
                             <SpinnerIcon className="w-16 h-16 mx-auto mb-4 text-primary" />
                             <h4 className="text-lg font-semibold text-on-surface">Generating Report...</h4>
                             <p className="mt-1 text-sm">Please wait while we compile your data. This may take a moment.</p>
                        </div>
                    )}
                    {!isGenerating && reportReady && (
                        <div className="text-center">
                             <CheckCircleIcon className="w-16 h-16 mx-auto mb-4 text-success" />
                             <h4 className="text-lg font-semibold text-on-surface">Report Ready!</h4>
                             <p className="mt-1 text-sm text-on-surface-secondary">Your report for {selectedPlatform} for the {periodOptions.find(p => p.id === selectedPeriod)?.label} is ready to download.</p>
                             <button
                                onClick={handleDownload}
                                className="mt-6 w-full bg-success text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 focus:ring-offset-surface flex items-center justify-center space-x-2"
                             >
                                <DownloadIcon className="w-5 h-5"/>
                                <span>Download PDF</span>
                             </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Icons needed for this page
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);
const DocumentDownloadIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const SpinnerIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5 animate-spin" }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
const DocumentReportIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const DownloadIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

export default Reports;
