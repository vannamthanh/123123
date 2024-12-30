import { Link } from 'react-router';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        marketing: [
            { id: 'mkt-1', label: 'Marketing on Facebook', to: '/#' },
            { id: 'mkt-2', label: 'Marketing Objectives', to: '/#' },
            { id: 'mkt-3', label: 'Facebook Pages', to: '/#' },
            { id: 'mkt-4', label: 'Facebook Ads', to: '/#' },
            { id: 'mkt-5', label: 'Success Stories', to: '/#' },
            { id: 'mkt-6', label: 'Measurement', to: '/#' },
            { id: 'mkt-7', label: 'Industries', to: '/#' },
            { id: 'mkt-8', label: 'Events', to: '/#' },
            { id: 'mkt-9', label: 'News', to: '/#' },
            { id: 'mkt-10', label: 'Site Map', to: '/#' }
        ],
        business: [
            { id: 'biz-1', label: 'Build your Presence', to: '/#' },
            { id: 'biz-2', label: 'Create Awareness', to: '/#' },
            { id: 'biz-3', label: 'Drive Discovery', to: '/#' },
            { id: 'biz-4', label: 'Generate Leads', to: '/#' },
            { id: 'biz-5', label: 'Boost Sales', to: '/#' },
            { id: 'biz-6', label: 'Earn Loyalty', to: '/#' },
            { id: 'biz-7', label: 'Inspiration', to: '/#' }
        ],
        resources: [
            { id: 'res-1', label: 'Get Started with Pages', to: '/#' },
            { id: 'res-2', label: 'Setting up your Page', to: '/#' },
            { id: 'res-3', label: 'Manage Facebook Page', to: '/#' },
            { id: 'res-4', label: 'Promote your Page', to: '/#' },
            { id: 'res-5', label: 'Messaging on your Page', to: '/#' },
            { id: 'res-6', label: 'Page Insights', to: '/#' },
            { id: 'res-7', label: 'Meta Business Partners', to: '/#' },
            { id: 'res-8', label: 'Instagram Business', to: '/#' },
            { id: 'res-9', label: 'Support', to: '/#' }
        ],
        advertising: [
            { id: 'ad-1', label: 'Get Started with Ads', to: '/#' },
            { id: 'ad-2', label: 'Buying Facebook Ads', to: '/#' },
            { id: 'ad-3', label: 'Ad Formats', to: '/#' },
            { id: 'ad-4', label: 'Ad Placement', to: '/#' },
            { id: 'ad-5', label: 'Choose your Audience', to: '/#' },
            { id: 'ad-6', label: 'Measure your Ads', to: '/#' },
            { id: 'ad-7', label: 'Managing your Ads', to: '/#' },
            { id: 'ad-8', label: 'Ads Guide', to: '/#' }
        ]
    };

    const renderLinks = (links: Array<{ id: string; label: string; to: string }>) => (
        <ul className='mt-4 space-y-2'>
            {links.map((link) => (
                <li key={link.id}>
                    <Link to={link.to} className='text-[#E4E6EB] hover:text-white text-sm'>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );

    const languages = [
        { id: 'lang-1', label: 'English (US)', code: 'en-US' },
        { id: 'lang-2', label: 'Tiếng Việt', code: 'vi' },
        { id: 'lang-3', label: '中文(台灣)', code: 'zh-TW' },
        { id: 'lang-4', label: '한국어', code: 'ko' },
        { id: 'lang-5', label: '日本語', code: 'ja' },
        { id: 'lang-6', label: 'Français (France)', code: 'fr' },
        { id: 'lang-7', label: 'ภาษาไทย', code: 'th' },
        { id: 'lang-8', label: 'Español', code: 'es' },
        { id: 'lang-9', label: 'Português (Brasil)', code: 'pt-BR' },
        { id: 'lang-10', label: 'Deutsch', code: 'de' },
        { id: 'lang-11', label: 'Italiano', code: 'it' }
    ];

    const bottomLinks = [
        { id: 'bottom-1', label: 'About', to: '/#' },
        { id: 'bottom-2', label: 'Developers', to: '/#' },
        { id: 'bottom-3', label: 'Careers', to: '/#' },
        { id: 'bottom-4', label: 'Privacy', to: '/#' },
        { id: 'bottom-5', label: 'Cookies', to: '/#' },
        { id: 'bottom-6', label: 'Terms', to: '/#' },
        { id: 'bottom-7', label: 'Help Centre', to: '/#' }
    ];

    return (
        <footer className='bg-[#355797] border-t border-[#4267B2]'>
            <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                    <div>
                        <h3 className='text-sm font-semibold text-white tracking-wider uppercase'>Marketing</h3>
                        {renderLinks(footerLinks.marketing)}
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-white tracking-wider uppercase'>Business Growth</h3>
                        {renderLinks(footerLinks.business)}
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-white tracking-wider uppercase'>Pages</h3>
                        {renderLinks(footerLinks.resources)}
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-white tracking-wider uppercase'>Advertising</h3>
                        {renderLinks(footerLinks.advertising)}
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-white tracking-wider uppercase'>Resources</h3>
                        {renderLinks(footerLinks.resources)}
                    </div>
                </div>

                <div className='mt-8 pt-8 border-t border-[#4267B2]'>
                    <div className='flex flex-wrap items-center justify-between gap-4'>
                        <div className='flex flex-wrap w-full justify-center items-center gap-3 text-sm text-[#E4E6EB]'>
                            {languages.map((lang) => (
                                <button key={lang.id} className='hover:text-white cursor-pointer' onClick={() => {}}>
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                        <div className='flex items-center justify-center w-full flex-wrap gap-4 text-sm text-[#E4E6EB]'>
                            <span>&copy; {currentYear} Meta</span>
                            {bottomLinks.map((link) => (
                                <Link key={link.id} to={link.to} className='hover:text-white'>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
