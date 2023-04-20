import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterationSideBar = () => {
  const [brands, setBrands] = useState<any>([]);
  const [sizes, setSizes] = useState<any>([]);
  const [brandsExpanded, setBrandsExpanded] = useState<boolean>(true);
  const [genderExpanded, setGenderExpanded] = useState<boolean>(true);
  const [sizesExpanded, setSizesExpanded] = useState<boolean>(true);

  const initialFilters: any = {
    brands: [],
    gender: [],
    sizes: [],
  };
  const [filters, setFilters] = useState(initialFilters);

  const FilterSidebar = () => {
    // Rest of the code
  };

  const handleFilters = (category: any, option: any) => {
    const newFilters = { ...filters };
    const index = newFilters[category].indexOf(option);
    if (index === -1) {
      newFilters[category].push(option);
    } else {
      newFilters[category].splice(index, 1);
    }

    setFilters(newFilters);
  };

  useEffect(() => {
    setBrands([
      { name: "Nike", value: "nike" },
      { name: "Adidas", value: "adidas" },
      { name: "Puma", value: "puma" },
      { name: "Reebok", value: "reebok" },
      { name: "New Balance", value: "newbalance" },
    ]);

    setSizes([
      { name: "Small", value: "small" },
      { name: "Medium", value: "medium" },
      { name: "Large", value: "large" },
      { name: "XL", value: "xl" },
      { name: "XXL", value: "xxl" },
    ]);
  }, []);

  return (
    <div>
      <div className="border-r border-gray-200 p-4">
        {/* Brands */}
        <div className="mb-4">
          {/* Add an icon and a handler to toggle the expanded state */}
          <div
            className="flex items-center content-center cursor-pointer mb-2"
            onClick={() => setBrandsExpanded(!brandsExpanded)}
          >
            <p>
              {brandsExpanded ? (
                <FaChevronDown className="mr-2" />
              ) : (
                <FaChevronUp className="mr-2" />
              )}
            </p>
            <h3 className="text-lg font-medium text-white mb-2">Brands</h3>
          </div>
          {brandsExpanded &&
            brands.map((brand: any) => (
              <div key={brand.value} className="flex items-center mb-2">
                <input
                  id={`brand-${brand.value}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out"
                  value={brand.value}
                  checked={filters.brands.includes(brand.value)}
                  onChange={() => handleFilters("brands", brand.value)}
                />
                <label
                  htmlFor={`brand-${brand.value}`}
                  className="ml-2 block text-sm text-white"
                >
                  {brand.name}
                </label>
              </div>
            ))}
        </div>
        {/* Gender */}
        <div className="mb-4">
          <div
            className="flex items-center"
            onClick={() => setGenderExpanded(!genderExpanded)}
          >
            {genderExpanded ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronUp className="mr-2" />
            )}
            <h3 className="text-lg font-medium text-white mb-2">Gender</h3>
          </div>
          {genderExpanded && (
            <>
              <div className="flex items-center mb-2">
                <input
                  id="gender-male"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out"
                  value="male"
                  checked={filters.gender.includes("male")}
                  onChange={() => handleFilters("gender", "male")}
                />
                <label
                  htmlFor="gender-male"
                  className="ml-2 block text-sm text-white"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="gender-female"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out"
                  value="female"
                  checked={filters.gender.includes("female")}
                  onChange={() => handleFilters("gender", "female")}
                />
                <label
                  htmlFor="gender-female"
                  className="ml-2 block text-sm text-white"
                >
                  Female
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="gender-unisex"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out"
                  value="unisex"
                  checked={filters.gender.includes("unisex")}
                  onChange={() => handleFilters("gender", "unisex")}
                />
                <label
                  htmlFor="gender-unisex"
                  className="ml-2 block text-sm text-white"
                >
                  Unisex
                </label>
              </div>
            </>
          )}
        </div>
        {/* Sizes */}
        <div>
          <div
            className="flex items-center"
            onClick={() => setSizesExpanded(!sizesExpanded)}
          >
            {sizesExpanded ? (
              <FaChevronDown className="mr-2" />
            ) : (
              <FaChevronUp className="mr-2" />
            )}
            <h3 className="text-lg font-medium text-white mb-2">Sizes</h3>
          </div>
          {sizesExpanded &&
            sizes.map((size: any) => (
              <div key={size.value} className="flex items-center mb-2">
                <input
                  id={`size-${size.value}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-white transition duration-150 ease-in-out"
                  value={size.value}
                  checked={filters.sizes.includes(size.value)}
                  onChange={() => handleFilters("sizes", size.value)}
                />
                <label
                  htmlFor={`size-${size.value}`}
                  className="ml-2 block text-sm text-white"
                >
                  {size.name}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterationSideBar;
