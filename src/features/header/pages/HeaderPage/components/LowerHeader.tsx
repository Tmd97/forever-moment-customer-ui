import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronIcon } from './HeaderIcons'
import { iconMap, defaultIcon } from './HeaderData'
import { Menu, X } from 'lucide-react'

interface SubCategory {
  id: number
  name: string
  description: string
  displayOrder: number
  isActive: boolean
  categoryId: number
  categoryName: string
  categorySlug: string
}

interface Category {
  id: number
  name: string
  description: string
  slug: string
  displayOrder: number
  isActive: boolean
  subCategories: SubCategory[]
}

interface LowerHeaderProps {
  categories: Category[]
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const LowerHeader = ({
  categories,
  mobileMenuOpen,
  setMobileMenuOpen,
}: LowerHeaderProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  // const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileActive, setMobileActive] = useState<number | null>(null)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (catId: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(catId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const activeCategories = categories
    .filter((cat) => cat.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}
     

      {/* ================= ORIGINAL DESKTOP CODE (UNCHANGED) ================= */}
      <div className="relative hidden md:flex justify-center bg-white/60 backdrop-blur-md px-6 py-1 border-b border-[rgba(0,0,0,0.05)] overflow-x-auto md:overflow-visible scrollbar-hide">
        <nav className="flex items-center gap-1 whitespace-nowrap md:whitespace-normal">
          {activeCategories.map((cat) => {
            const subcategories = (cat.subCategories || [])
              .filter((sub) => sub.isActive)
              .sort((a, b) => a.displayOrder - b.displayOrder)

            const isOpen = activeDropdown === cat.id

            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* === YOUR ORIGINAL CATEGORY LINK === */}
                <Link
                  to={`/category/${cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg text-[0.95rem] font-bold tracking-wide transition-all duration-300
${isOpen
    ? 'text-[#b76e79] bg-[rgba(183,110,121,0.08)]'
    : 'text-black hover:text-[#b76e79] hover:bg-[rgba(183,110,121,0.08)]'
}`}
                  style={{ fontFamily: `'Playfair Display', serif` }}
                >
                  <span className="flex items-center justify-center w-[16px] h-[16px] shrink-0">
                    <span className="[&>svg]:!w-[16px] [&>svg]:!h-[16px] [&>svg]:!text-[#8c7b65] group-hover:[&>svg]:!text-[#b76e79]">
                      {iconMap[cat.name] || defaultIcon}
                    </span>
                  </span>

                  <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#b76e79] after:transition-all after:duration-300 group-hover:after:w-full">
                    {cat.name}
                  </span>

                  {subcategories.length > 0 && (
                    <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-80' : 'opacity-50'}`}>
                      <ChevronIcon />
                    </span>
                  )}
                </Link>

                {/* === YOUR ORIGINAL PREMIUM DROPDOWN === */}
               {subcategories.length > 0 && (
  <div
    className={`absolute left-1/2 -translate-x-1/2 mt-2 min-w-[300px] z-50 transition-all duration-300
    ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
    hidden md:block`}
  >
    <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl border border-black/5 shadow-2xl flex flex-col max-h-[420px] overflow-hidden">

      {/* HEADER */}
      <div className="flex items-center gap-3 px-5 pt-5 pb-3 shrink-0">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#b76e7920] to-[#c9a96e20]">
          <span className="[&>svg]:!w-[18px] [&>svg]:!h-[18px] [&>svg]:!text-[#b76e79]">
            {iconMap[cat.name] || defaultIcon}
          </span>
        </div>
        <div>
          <h3 className="text-sm font-bold text-black">{cat.name}</h3>
          <p className="text-xs text-gray-500">{cat.description}</p>
        </div>
      </div>

      <div className="h-px mx-5 bg-gradient-to-r from-transparent via-[#b76e7920] to-transparent shrink-0" />

      {/* SCROLLABLE LIST */}
      <div className="relative flex-1 overflow-y-auto px-4 py-3 pr-2 scrollbar-hide">

        <ul className="flex flex-col gap-2">
          {subcategories.map((sub) => (
            <li key={sub.id} className="min-w-0">
              <Link
                to={`/category/${cat.slug}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative block p-3 rounded-xl transition-all duration-300 hover:translate-x-1 hover:bg-gradient-to-br hover:from-[#b76e790d] hover:to-[#c9a96e0d]"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 rounded-l-xl"></span>

                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-[#b76e79] break-words leading-snug">
                    {sub.name}
                  </span>
                  <span className="text-xs text-gray-400 break-words leading-snug">
                    {sub.description}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* FOOTER */}
      <div className="px-5 pb-5 pt-3 shrink-0">
        <Link
          to={`/category/${cat.slug}`}
          className="!flex !items-center !justify-center !gap-2 !w-full !px-4 !py-[10px] !text-[14px] !font-semibold !leading-none !text-white !rounded-lg !bg-gradient-to-r !from-[#b76e79] !to-[#c9a96e] !shadow-md hover:!shadow-lg !transition-all"
        >
          View All {cat.name}
        </Link>
      </div>

    </div>
  </div>
)}
              </div>
            )
          })}
        </nav>
      </div>

      {/* ================= MOBILE POPUP ================= */}
     {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm md:hidden">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-[380px] bg-white shadow-2xl p-5 overflow-y-auto">

            {/* Header */}
           <div className="flex justify-between items-center mb-6 
  pb-3 border-b border-[#d4af37]/30">

  <h2 className="text-lg font-bold 
    bg-gradient-to-r from-[#b76e79] to-[#c9a96e] 
    bg-clip-text text-transparent">
    All Categories
  </h2>

  <button
    onClick={() => setMobileMenuOpen(false)}
    className="w-8 h-8 flex items-center justify-center 
    rounded-md 
    bg-gradient-to-r from-[#b76e79]/10 to-[#c9a96e]/10 
    text-[#b76e79] 
    hover:from-[#b76e79] hover:to-[#c9a96e] 
    hover:text-white 
    transition-all duration-300"
  >
    <X size={18} />
  </button>


</div>

            {/* Categories Vertical */}
            <div className="flex flex-col gap-3">
              {activeCategories.map((cat) => {
                const subcategories = (cat.subCategories || [])
                  .filter((sub) => sub.isActive)
                  .sort((a, b) => a.displayOrder - b.displayOrder)

                const isActive = mobileActive === cat.id

                return (
                  <div key={cat.id} className="border-b border-gray-100 pb-2">
                    <button
                      onClick={() => setMobileActive(isActive ? null : cat.id)}
                      className="w-full flex justify-between items-center py-2 font-semibold text-black"
                    >
                      <span>{cat.name}</span>
                      {subcategories.length > 0 && (
                        <span className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                          <ChevronIcon />
                        </span>
                      )}
                    </button>

                    {isActive && subcategories.length > 0 && (
                      <div className="pl-3 mt-2 flex flex-col gap-2">
                        {subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            to={`/category/${cat.slug}/${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm text-gray-600 hover:text-[#b76e79] transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default LowerHeader