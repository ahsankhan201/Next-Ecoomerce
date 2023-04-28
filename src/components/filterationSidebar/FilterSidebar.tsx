import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterationSideBar = ({ sideDataClone, setFilters, filters }: any) => {
  const [brands, setBrands] = useState<any>([]);
  const [sizes, setSizes] = useState<any>([]);
  const [brandsExpanded, setBrandsExpanded] = useState<boolean>(true);
  const [genderExpanded, setGenderExpanded] = useState<boolean>(true);
  const [sizesExpanded, setSizesExpanded] = useState<boolean>(true);

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
    const uniqueSizes: any = new Set<any>();
    sideDataClone.forEach((item: any) => {
      item.options[0].values.forEach((value: any) => {
        uniqueSizes.add(value);
      });
    });
    setSizes([...uniqueSizes].map((value) => ({ name: value, value })));

    const uniqueBrands: any = new Set<any>();
    sideDataClone.forEach((item: any) => {
      uniqueBrands.add(item.vendor);
    });
    setBrands([...uniqueBrands].map((value) => ({ name: value, value })));
  }, []);

  return (
    <div>
      <div
        className="border-r border-gray-200 p-4"
        style={{
          width: "167px",
        }}
      >
        <div className="mb-4">
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
            <h3 className="text-lg font-medium mb-2">Brands</h3>
          </div>
          {brandsExpanded &&
            brands.map((brand: any) => (
              <div key={brand.value} className="flex items-center mb-2">
                <input
                  id={`brand-${brand.value}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 transition duration-150 ease-in-out mr-3"
                  value={brand.value}
                  checked={filters.brands.includes(brand.value)}
                  onChange={() => handleFilters("brands", brand.value)}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor={`brand-${brand.value}`}
                  className="ml-2 block text-sm  ml-3"
                >
                  {brand.name}
                </label>
              </div>
            ))}
        </div>
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
            <h3 className="text-lg font-medium  mb-2">Gender</h3>
          </div>
          {genderExpanded && (
            <>
              <div className="flex items-center mb-2">
                <input
                  id="gender-male"
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value="male"
                  checked={filters.gender.includes("male")}
                  onChange={() => handleFilters("gender", "male")}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor="gender-male"
                  className="ml-2 block text-sm "
                >
                  Male
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="gender-female"
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value="female"
                  checked={filters.gender.includes("female")}
                  onChange={() => handleFilters("gender", "female")}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor="gender-female"
                  className="ml-2 block text-sm "
                >
                  Female
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="gender-unisex"
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value="unisex"
                  checked={filters.gender.includes("unisex")}
                  onChange={() => handleFilters("gender", "unisex")}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  htmlFor="gender-unisex"
                  className="ml-2 block text-sm "
                  style={{
                    width: "50px",
                  }}
                >
                  Unisex
                </label>
              </div>
            </>
          )}
        </div>
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
            <h3 className="text-lg font-medium  mb-2">Sizes</h3>
          </div>
          {sizesExpanded &&
            sizes.map((size: any) => (
              <div key={size.value} className="flex items-center mb-2">
                <input
                  id={`size-${size.value}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value={size.value}
                  checked={filters.sizes.includes(size.value)}
                  onChange={() => handleFilters("sizes", size.value)}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor={`size-${size.value}`}
                  className="ml-2 block text-sm "
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
