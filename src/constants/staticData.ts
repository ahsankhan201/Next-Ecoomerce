const sampleImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHPI-Z7KOgBBmcHEwnk7s8LnU5R6o4nNAUA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fwPEUSf2LS0En3uDiuy0rmHCv8byBb6eHg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
  "https://cdn.shopify.com/s/files/1/0262/5804/7069/collections/Calza.png?v=1583492578",
];

export const menuData = [
  {
    title: "MENS",
    id: "Mens",
  },
  {
    title: "WOMENS",
    id: "Womens",
  },
  {
    title: "KIDS",
    id: "Kids",
  },
  {
    title: "ACCESSORIES",
    id: "Accessories",
  },
];

export const EidCollection2023 = [
  {
    title: "MEN",
    id: "Men",
  },
  {
    title: "WOMEN",
    id: "Women",
  },
  {
    title: "Girls",
    id: "Girls",
  },
  {
    title: "Boys",
    id: "Boys",
  },
];

export const shooping = [
  {
    id: "Mens",
    title: "Mens",
  },
  {
    id: "Womens",
    title: "Womens",
  },
  {
    id: "Kids",
    title: "Kids",
  },
  {
    id: "Accessories",
    title: "Accessories",
  },
];

export const ShopByBrand = [
  {
    id: "NDURE",
    title: "NDURE",
  },
  {
    id: "Liza",
    title: "Liza",
  },
  {
    id: "Calza",
    title: "Calza",
  },
];

export const Accessories = [
  {
    id: "Womens Accessories",
    title: "Womens Accessories",
  },
  {
    id: "Mens Accessories",
    title: "Mens Accessories",
  },
];

export const SliderImages = [
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUXGBgYFxcYGBUYFxUXGBcYFxUVGhkYHiggGB0lHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0uLS0tKy0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMUBAAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABJEAACAQIDBAcDCAYJAwUBAAABAgMAEQQSIQUGMUETIlFhcYGRBzKhFCNCUoKxwdEzYnKSsvAVJENTY5OiwuGDo/ElRLPD0jT/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QANhEAAgECBAMGBQMCBwAAAAAAAAECAxEEEiExQVFxE2GBkbHwBaHB0eEiMkIUFQYjM1JyovH/2gAMAwEAAhEDEQA/ANxooooAooooAooooAooooAooqj71e0rCYQmNPn5hpkQjKp7Hk4DwFz3UbsbRhKbtFXLuTVU277QsBhiVabpHH0IuuQewkdUeZrGN5N+sbjbrJJ0cR/sorqtuxje7eZt3VAQRVo5HQpYDjN+C+5qeP8Aa5M5Iw+GVByaVizfurYD1NREm/e0JOM+XuREH3gn41UoVp9GKjcmXYYWlH+K9STl2/jG44uf/McD0BtTVsfiDxxEx/6j/nSYr2sXZMqcF/FeSO0xkw/t5f8AMf8AOnUW2sSvDEzD/qy/nTKi9YHZw/2ryJyDe/HLwxLn9oK38QNPofaHjV4uj+Maj+G1VUtVu3K3MbEkTTXWAcBwaS3Idi9/p2jZNshqwoQjmnFeRZd2d5sfij1cPEE5yHpFXy+se4VeY72Ga1+duFcYeBUUIihVUWAAsAOylqmSscSpOMneMbIKKKKyRhRRRQBRRRQBRRRQBRRRQBRRRQBTTaGG6RLBijDVHHFWHA25jkRzBIp3RQEVsnaRkLRSgJPHbOmtiDwkS/vIe3lwOoqVqM2rssSlZEOSeO/RyWva9syMPpRtYXXuBFiARHz734aFVGKkWCXXNETmYFb3ICgkqbaG2txz0oEr7FjqC3l3ow2CTNM/WPuxrYyN4L2d50qjbye1BmBjwUZW+nSuBfxRDw8W9KzXFvI7GRyXdtSztdj561o58i3Swspay0J7ezf7F426KTBBwyIbMw/XfifAWHjVPMVOGZvqjyP/ABXOYc9Kj1Z0qUFFWSsJJHTqKKu4Yr09ihrBZRzFHTlUrpUrqsGTmig15Qye1ya9q47jbpHEN00wIgU6Dh0hHIfqjmfLttlK7saVKkacc0jrcXc3pyJ5wehHug6GS33J99axEgUBQAABYAaAAcABRHGFAAAAAsANAAOAFKVPGNkcCvXlVlml4dwUUUVkhCiiigCioLeLerC4JbzyWYi6xr1nbwUcB3mwrP8AEe1yeViuEwTOAeySVvNYh1fU0BrtFZXsf2sEOI8ZhjETzUOrDvMb628D5VpeBxkcyLJE4dGFwwNwf57KAc0UUUAUUUUAUUUUAUUUUAhisSkaNI7BUUFmY8AALk188bbxoxGKnxViOme4vxCABIwezqqDbvqze0vfH5TKcHA3zEbfOsP7V1+jf6gPqfCqRJJUU5cDpYWi4rM9zsvSMklcNJSTNWheSAmi1e16KEiR7FHY3U2+4+Ip/DiSPfFu8aj8xTNacRv40NloSI7RXJpms2Xgbd1jY0uswPd91YN7nTGgtpfuryU6U+3X2X8pKw5grGQLfj1bsTYczYVmxpUmoLM9iZ3L3YbFSZmBEKHrt9Y/UXv7TyFbJBAqKEQBVUAADQADgKR2bgI4I1ijXKiiwH3knmTxJqpbz77PhZnjWNXVcvElTci7a8CNRyqzTpvZHnMbjot5pu0dkXmm+KxUcS5pHVFHNiFHqaow9qMAjzPGyyW6q3BDHx4gd9qzDbW0pcVKZZp0Yk6C7ZUHJVFtAP8AzSUXF2ZDCpGcc0XdGz4n2gbOS/8AWAxH1Fdr+BC2+NQ+K9rWDX3YsQ/gkY8+s4rJRh+xkP2h+NejBk/V/eX86wbXNVT2u4MmxgxIA55YiPhJemW2/awjRMuEjkEnANKoCgdoAJufG1ZuMA/1fuP4160FtGBHwoZHmwZMNJO0+0zNLc3yqM2c/wCIb3twsBpWs7P372THGqRyrEg0CCKRQvkFsKxoxdmlCycnUMO/RvJhr63HdQG27Sxuy9oRdFJNBID7pzAMptoVJ1U1Tdzsc+ztoNgJXzRSEZWvcMG/RSjx90+HdVJKtERJExytcA2F9OKMOFx6HjTzCY2KUhZlEb/RmTq5TyvbhrzHw40B9Chxci4uOPdXdfNWPwk+Gla00qlzmeRJZFaXvLKbm3fe3pVj2F7S8VhmCOxxsQ94EATxgcTnHVfwYAntoDcqKZbK2hHiIY54jeORQ6nuIvr2GntAFFFFAFZ37WN8vksXyWFv6xKNSDrFGdC3cx1A8zyqzb47yR4DDNO+re7GnN3PAeHMnkK+acbtCSeaSeVs0khLMe88AOwDQAcgBWsmWsNRzvM9l82OsILCupHrgGwtXJao7HWjECaBXIpQVqSWseqa7ArkCuwKG50tKLeuFFKAVgHZHafjXUbjhe/hrXNu4ef5VYt1tmtmE7Kci+5cWDvw0HO3HxtUdarGlTdSWy9/N6A5wuz3jX52OwOoJANu4n6J7jSrHIuePqsASCunWGvEcNKvGz0Kg5wLsb2tYDSwFh4V3tBAQAEF/AGvPRx8lPtZeSbt9eBvCuoyUbX77+fAqey9rYhjFK08hGdQeu3aBwvUvtV+k99Q9yTqL/GpHCRDKQRlF+qLAW8uHG5pHH2iieRrEKrMdByBNW8F8UVKTvFu9ranOxtGNa2ytfhwMcxWLBmlIGgJyra4Cg9Ud2lcjFLxKi/laox7mxJ46n+efGl4wK9IzipWVh7h5E4kHwA0+FKLKliefIaio8rahXNYMklh1XiWH5VJRSOugYMv1W1Hx4VBRE9tSmFkFgM34WoB91ZELoLMukidl+DDupm4uO+nGCcLKvY90bvDafiPSkytrjsJFAKbNbNeFuEnuk/RkHuN5+6e5qYSC3HQ8D48xQBbXnfj2a3p1tnVxIOEih/tcH+INASsbjEYIg6vBpc8SltP9Nx9kVX8HP0ZsAAAeAFhUrulN846Hgya99iD9xNQGJazkdmnobUMI1/2P7XAEuAJ9z56DvhkPWX7Elx9sVplfN+7u1zhpoMWL2he0nfBJZZB320byr6MikDAMpuCAQe0HUGhkUpORwASTYAXJPAAcTSlZj7bd5jBh1wkbWknBLkcVhBsR9o6eAasN2N4Qc5KKM09o+9Zx+LLKfmI7pCO0fSkPex18LCqzBxpKnWFhJ4AmoztRgoRsh3ei1OVwL2BKnX1pHEMqe91fHs8q132JXJQjmloub0XmzxRXaikVxNxdUJ7z1R8a7w+LIvmRW7AbgDzVgTW2RlafxCjHbXoLqKUy01O2ilyqxqSCNA7G3cGcj4U3bbErqF6RmA/w1XzJA7z6ms9mRf3OF/2vzRKqtKhD4fE1ADbEyahs3aHUH0JW4NXDdfb0GdJlVMyfRlsRm5HkD3EVHKLjqyzh8RHEXUd0r2bS+f14Fv3L9n7SZZ8SCsfFYzo79hb6q93E91WfGzIZMqhVROogAACgdnZRsnf2FzkmHRNwve6X7zxXz9ajAa5XxeouzhCOzbfla3qaUqdZ1JOsrNbcrPlz23FJcRrpSX9IOvC3jbWuGFIuK89Ny4F6MIvdHs2LduJqsb8411w5UXIc9bjooI/EqPOp81Xd9MC0kYKn9Gkj2sNSDFfXjoufTw7Km+Gyj/VQc9r/R2+djTFxfYSUPeuvyM7kIJFr6DW/b3d1exmlFUUqIxXuDzQgz0RNrSrw14sdAemS1OYZb00cV4osaAlUmtY6ixB46afdUhjWAkfxv661CJKBxGvaL6+XCns02chh9RQfECxoALDW1OMS2bDIeaSMvk4BHxBpiCdfKncOsMy9ysPstY/xUB7u3NbEJ33X1Bt8bU7xOxw0GKZR85h5Fcnm0MhKMPJijeGaojZ8lpYz2Ov8QrStycKsuMxeHcXSbClSO3rKn4msmDNtmm5KE6MCpGvA6VvXsw2j02zYLm7xAwv+1ESn3BT518/KpRyjcUYqw/WUlW+INaz7F8ZaTGQciYp1+2pR/4F9awZNQlkCqWY2ABJPYBqTXy1vjto43GTYg3ys1ox2Rrog7tNfEmt39q21/k+zpbe9KRCv275j+6Gr53WKtJM6OBgrOb6CMUd6kRM8agxtl7RyPPWuIYqXxMqABZB1WPvD3k5ZgPpDXUcx31havUnxU2qbcXZqzVnbiOMPt1To4yn1FPZMSJLWYGwtxBuBwGtVvFbNmUZgudOTx9dT6ajzqPuV5fgadjHdGcP8fr07dpFTts9n5rTyS77lyxOz1aMFdHvro3DlYcPj5c6g8VgGU9bX+H/AIqDVnvpf409gml+rfyNbxi48SjjMXSxF5RpKMm73UvlbKl4782xx0BHDKPSms0EmbiCOevnyqRhimb+yY/so5/Cna7CxLC/QSDvIC/xEVuUCJKaalvIn/ivcO4Rgy3zDne3lcGpGbZjL78kEfbmkUn0W96ayjDLwMkzf5cf4sfhRmYuUZKS3Q+XbDyOEsRmIzCMZ3sT1iL6Xt21sEIsABwAFYe+0JMpRLRI2mWMWvftbia1bdDb4xcTG2Vo2yMNfIi/b+FcP4xReSEorRN38bW9DsYPGVK02qsm3wv9OCJl6SejaCuUYRmz8j2aiq3j8TiobZmVgedhx7OArgKk57NX5HViTYcEkAgkcRcXHjUftiJsryXGQYeZSOd2yFSPJW9RURu/jr4iXNa7217xfSld5tuqokw4QsSpViCBlLDgBzNjerjwE6eMVGGtlFvo4q/ldpcXpuyCpXj2LnLTV28Lpemv4M3MZ06xGg765644NT58IOTMv7SX+Ib8K5OCY+6yN5lT/qFvjXrTzY3jml5Lm4nTU6ceFdJjiPeU/hXqgo46QFL5uOnHKfPga8xMqmxVr2bh48Tbn40MnRx6GvPladtI5x3VyVHYKAcHEg8GHnTrCzfzcfA9lRgiXsFOsGi390UBKxjj5Uvg+LjtRx8L/hTeM8fAfjScmKCEMeA4+HOgG2GxIJBFzlIubGwN9LngK1XcbGAbVjtqJYpUv3qekt6KaynZ0S2K3brDtstyOJFtRe/PhWjbDSOLamAMTh85INuRMbK3rrQFf37wXRbTxSKth0mceEirISPtO3pVk9lGIy7SUf3mGkU8PejdGA046E+lM/bDCBtM3uA8ETaC9zmkT/6xSW4V12lgrAkFpV4AEXhbUgctKAnvbpjbvhoOQDynxNkT4Z6y1RVw9rWKz7SlH92saD93Ofi5qoIaie52cPG1KIsgpjtp+qpAJALcja+l9e6kdp7QZSVXQjnpzAPZpxpPZmId16MOQy3yrycXuQP1udufjWyi9yvVr0pydOd0uem/i1pzv+U0wmOYNeNmQ/qsRr324+dSibdxX9+fNYz8StM/6MJN1HW5jk37J5Gm8b8eXdW8ZKSKeJwtWg1nWj2fB++RL/03iuPTH92P8Fr19uYo/wDuH17Mv4CozpDUzsXDWs97E8+xeZBHAW1JrMpZUbYLCPE1MrllileUnskuJ78qx7jXESgd72+6uf6Gnk9+V28mb7zUph3LfohZf7xgGv8AsA8u8+lGLRR+kZmuNBcgMewLw+FRObvq/I7tHAYZwzU6TlFfzqSyRtzSSzNdUiLGwIl9+TL9tE+Fr118lwo+mfLpD/srtsfEL5Vj0HBbtb7Wi37gTXmB20sjFLFSeFjx/KjutdfP7GlKOFrTVNTpRb0VqLfhmnYj8RDlNw2YctCD5gi9WXd3HywSLkN1JUMD2t7ovzFzz4X07CxxsWaNr3Nhx7gQK7gOoHPQjxVcw+K1pNqaUZK6ejRJ/aI4VV87vaClGWzT/X3vilfVpou2O3ujUAgKAQDd2C6kXsF4m1Qe1t88O6NG+jcQVu1iOHL+b1nEQEjEs1r3JJufu1NeyQoDbOD4Kfxran/h/DZU3mvzvY5f9xq8Evn9y6QY+NSz51Uhr6kX5WNuNqjNp47pJnkVhZmvobjsqJMcbRh2brH6ItcW017OHxrnAuOsAOzvOl/TjV3EYWnGo6yvd+XD7IrVK0pU1HgtvfiTcWJuDe1dGUMLEC3pTFTwpbLpVcrnO0McojaMi66FdLhTzAvwBFM9mSAZdLA6m2h17xr2UjtUHgDpbW1e4E6Ke4fdQE4yMfpKw/WUN9+tcnDDiYl/1An7INNImNOYsUeBNAergRa5i/1a/EUTYKMKGHC9tfeVhyNtDShxBv3c6RncZZLa+6bDQA3tb0NAeB+Xd+JqJ23JwAp6X0v3W+NRZQSShRwHxoC8bu7nticMkySEDXqlCbaheObXiOXKp/A7unBY/CFpA56aMWAItmYLz8auO7uGTC4FEKjMHiTUcHciQjusGA8jVf8AahJ8n2jBiPooYpGHaquM3npQCXtthti8O4uC0JXyRyR/8lR/s8F9oYIcbGc/9k1O+29CWwUqnq2nBOltehZePcGqJ9mp/wDUcMSRqmIGotfqqdLaX0PlegKtv3Pn2ji2/wAZ1/c6n+2oXMbdVSzHQKASSfLlUptez46bMdGxMl/AyterSuCVmGHgQIoCtmX3255i3iCPKo0rnUrV+ypxS3a+iM7G7GJk1fKl+OY9b0W/pUjhd0yozCRieREegI1BBzcb1qcWxMKoHTmMEcizEnxXNr6U8faeFRQsaMwUWAACoPC/D0qU5NjMNpQEMrkayA5hawEiWD/vAg+tVzbEYEgb64BbvIOX8KvW9sokJcJkyuNAb8VZb8Odx6VR9tnWM9zf7ai2qHoO07X4NJS1cJJLzVvlJrpoRsxsCasVs0cacnyqf2cpdx5kR1WsYerVhic/1exAPWtfhfLEo/EVvNarxOZg6kI05qf7ZSpp/wDFNt+hKxcezKfTsNRm3B11eVHaPLYhSFOYcbkg2HlUriokhCn5Xhmzg5lGcspFrqQt+0dlMm2rCNDib9yQN98jGoYwknc9F8R+KYDEUXSzvhtF8Nt7K3dfpYiZsdEAqw4eMtc6tnlAB+jZrBj35QOWvJ9BHKxWTEFUC3KJlRFB4XyqABx8a9/pCL6K4iQ97Rxqf8pSfjXgxMn0IIY+8jpHHm5P3VJLqcPCZIVFUhTlUad1pljfvtmb6XsOJiWRyiEjLYueoo1vZb+8e4U63fgSXExLJ+j4NY29/LENeRvJ8Kh8YHcZpZGcgi1z1RbXReA8qnN0sMXnS3OWO57FhHSk/v8ARDzqKTjCOfgk2/Au4nG4mqqka1lKSgklwTlJ9/J31I7HbldHI6pJcAkAHQ6EjjwNQmN2DKpsBceIrU9448uIlH6xPrrVdxy134/tSOKopoqZwciwhWVRYk3vdjfy76XwGzFEUkp94Wt3XdQfvqUxA6tdYdP6rMf2B/3F/KtK9Ndm2buypPqRK8aV5Umo1ru2lcsgGWKQlvACkdnt1R/POudr/l+Ne7OTq/z20BJR17zpOOlgKA8Vta6mPUk+xXFcynqSeK0A1mksFtXGEkVZA4HWuOPA2Ncznh4UlGbEeNAaPPv9MVCSwC4n6YlW5/UsRy5G9eb577R45gwgkWylbEg8eHu1FzJdfFlprC6q766krYW15i3xoDQd83efYmBncDMrpe4sACjoCfRfOor2eSf+oYPQcZhobjWE6js4Ved4diNFsR4HIZokz3F7XWTpNL9gqg+ziS+0cJpbWbT/AKLamgKftpv6xiCOPSTEfvsatGzcT00MMgOrLlex56kf6kk9aq+0z89Kf8V/Prmp/dLCSrA7ZD0Ib5t+XSC8jJ36KRp9YitIPgX8ZBuEZcErehP4TCVJxYWlMJECARwOo8OVSUcNSM55Vd5tn/NOQOK3816w/Gsv25/Zn9Z/9tb3itmtKhVVJ/nXXhwqlbx7gI8IMGZZku+QsGWXNe4GnVOZWXxXvvUNSSi1KXQu0cVGGFq0ZfytbqnrfwRk2L92pPFKGjhU/wB2D6lv/wA1H4pbKbixHEHiO0GpmKIjKHFj0S6d2Y/makmyPBxU5Km+LXyUjvC4OPNbKCMq8ST9EE8e8mnaxAcAB4C1cYFAugHHgOwU4NV5S1PS4ahGlTjGyuly9sRtQRXbGky3bwrBYb4sb4s/Nnxq3+zfMxlPVyJ1FsBmJJzOxPf1R5VUltLLFENczi4B5X1+F60vYkMaySmN1K9RTGtvmiq2sSDxtbQ2qh8TrKNB0+LV/wDtHfrr5HHaVTEupHVJxXlGTfXVrmc73p8/m+sqn/SKqeNFXTe1b9E3alvQ2qm48V6vCT7SjCXNL0OS1Ztcm/UjcRwp4IyMDK1tDJGL/vG3wpriBpUjimP9HAcunXz6j1nGOcaX6eav04/ISt2b6laFKWsK4A410rXFcwgIvao513s/3BXm1+Ao2Z7p7vyFAPUFdg1zGtdoKA9QUhP7ni5+A/5pdaZyOfifvoBpPxHhU9gN1naJZ5pEgjb3S56z+C3FREIBmjDe6WTMTwALC9+61TG8WDxJxWadGtmCoeKhL2QDkBb11oC04LY4kGWKZXbsNgWt2a8arOMiZJ4wwIbOgYHiCGFP8G1mHixHqeFKb4SEfJnf9NZXYHiQGGTN2EgGgPofaeGEsMkR+mjL+8pH41hvslwTvtJDraESMxAuNVMYBPK5b4U79o/tUEuHihwZZDKpM99GTl0N+d9SSOQHbVt9iTxHAtlX50P8631iQCuvYAbW5WPbQGfbo7ptjsRK7XGHidmkbmxuT0a95HE8h5Vpu8sH9UVIQqxRhWVFFgAuqkHx4+Jqw7t7GTCYdYF72c8MzsSXb1PkABUbGq5WQHOqsy/ZOoH8QqliJyptW92s/f5JMTWdRrlw995Wd3po/k6s5a6s0eVQLnLcjU6Dq2pzHtVpLGCBgATezAvcNlIZiMq21NhevMFu1FGXLfOZiCAw6osLDTmbWvy7qmFWwAAAA4AAADwA0FbSxSvaPmQ3IuTD4p7F5SdDdc5UBrjK1oxY89O/nTuKBsqZmu6s5JtoVk6xXxD3I8aclq5zVBUqymsrtboYepjntc2IIZhOgsswN+zpF4+o18jVc2fKxuHObKqIpOlgNbeWta57S9mtiMCyoheRGR0UAkk3s1gBe+UtWa4H2fbTl1+Tsi/Wkso159Y3+FXKLzU7X2JsPWdKoppXt9rC2wsMcRMIYuvI3ZoqLzZjyAqz71bDw+GaCBDK00pC+7dDyLacDf6IvoDV23Q3ZiwMIRbNI1jJJbVz2dyjkPxqdLVE2r6HSlja8lvboYjt7dzFQyiK6uSMwEXWcjXUqdRwPpVYkwMzOUVHZuyzZvTlX0DHu7hhijjRH/WCpXOWc8QBfKTYGwtpbSo3Y2ysVhWxU80xxTSapGiBCbXOXU2ueqvgo15VJGqlwKVVTqfuk31d/fkyh7o+y/GSuJJg2HQAkMbdJe2mVeXiav8Ah90/kUeVOsl9TbW/a3bftr3Ym9UkeFbG46I4coSuVuqWtlUCxPNgwBNtLHgLm07B2uuJRZAwaORcyGwH2TY2PP7tdajxWGp4mGVuz4PXfpfXx+Qw9adB3jtx/wDd14FJ3ljvh42HJmB89RVExvLxrYd9MAOgcKo4Z7AcxxOndWOY1xcV2fhkezw8YN3ypK/QxKanNyXFsZ4nhUntJcuzotfenPwQ/nTBhmqz7wbAnbZ+H6ONm6Ms8gUXKhxobDU6DlU+Ol/lpd4m/wBFu8ocVdZeVeKnEeXhXutcmxARu1F0Hh+Vc7Je4Pj+Apxj4rgAcSbetIbHGnmayCQFepXo416o1oAFMjhnd8kaM7EmyqCxOvYKtexd2XmUTSHooTwYi7SW4iNef7R0HfVpwxjw6FYQIlPvNfrv+2/E+AsOwVUxONp0NHrLkvry9e4u4XA1cRqtI83t4c/TvM7k3K2g2vySXKdL2GniL3A7yKuG19prE6QTMjTAJ0keW4jOQdRXA7ibHhmFSkEsiEGNjmve5NiB3EVBe0zBj5bhZ9AcRCpe311JXNblcZfStMJjViG1ltbvv9Eb434e8MlLNdPut9X6hhdoohUx4ZVNiczEvl4mwv31Wd45XkkMjkljlJJqw4WQFF7QCD41XtqAu6ooLMSAFUXYnkABxNXjnnW5G6bbRxTpcqsaM99NStgq68LsbX7A1b17Od2XwGFMcjBpHkZzbkNFRSeZCqNe0mmfsw3P+QQZpB8/KAZP1ALlYx4XJJ5knsFXmgEMZfo3txym3pVS2RCRmJ1DC/gVP5E1dKruKwTRS3X9G51HYTXOxtN5oVOC0fjx+jNZLVMRem7Gu2ve1Kx7Mlb6Nh2tp8ONRK8tIo1GZakmep6HYQ+mxPcNB+JqRw2CjT3UAPbxPqdaljhZvd2GVkBsrCOZFcqQq6ksCBbuvTzG4rObD3Rw7++jefGNFErKLgsAwva4IJ0PDiOdQeF2xG5sbo3Ywt6HgfKpcqpLIn3629O4sUYpdffmSV68FCsDwNBFYLAXoD15avQKATx2DjmQxyosiHirAEHyNRse1cNDisLs8Lq4NkTRYo0QlS3YpKhfOnm08eIUzHjyFUrdrdZ8ZtUY6S4hhVWvcjpJgTlTwGjHyHM1tBpyy+/f45o1npHN4dTTN41bKpVSbXBtroe7srLds7DV2JVSp7B+R4Vs7ikHwKN7yg+IBroU6mTgVk7GKbO2KUcdW+ul/wAq1rdPCOkZMlwWOgPEAf8AmpPD4CNNVRV8AB91Uj2lb9DCL8nw7D5Qw6zaEQqeeuhc8hy4nlfNWs6nAN3J7ebYOz5B0mKjiBJChyRGxZjZVzgi5J0tVTxfsow7m8OIkj/UcK48jofiaqmw9/sfcLIhxa9hU5/JlFvUGtQ3eYS/PussQLBujlLZs4A1ykkKvYBoTrUGtzGhnGK9kmND3V4HUG46zKTbhcFdPWorE+zHH4ZAQgmvcsIyMyHssT1h4X8K3x8eg7fSl0IYAjgRceBrIPmfG7DxMKh5cPKingSjW07fq+dPdztkJiZDI5vBEA0hH0iTZIx3sb+QNfRnRiqDv1OEZURLAnM2VQMx1AJtxtr61XxVfsaTmt+HV7FnB4f+orRp8OPRbkDjcUZGzWAAFlUaBVHBR3VCYyNmKhwdD9G3O3b99T52dL0fSlCE7TYcdL2401y3rzClOEs0lq9bvfqetywlDLF6LSy2VuB3g4s2VVB1sAOfYBVO9ruPA2isat//ADwxJ3BrFz/EK1ndPZRuJmH7A7TzbwFTMW5uBE7Yk4ZHnZsxkcF2zdozXC+Vdv4XQcIOpL+Xp+XqcD4viFUqKnH+O/X8Iyfc3cfaGLAlmC4eEjQup6VweYjuMo72t4GtT3c3JwuDbpI1LS2t0jm7WPGw4LfuFWaiuocg8Ar2iigCuXQEWPCuqKATSJV4ADwFKUUUWgCiiigIneLZHyqBoc5QkghgAcpU3Gh9NCDYnUVnm09j43Dg9JH00f1owWHiUtmX0bxrWaKiqUYVFaS9962ZJCrKGxjmC2tzikynhl95fDU3B8/KpzC7wNwljP7Ufzg81tmHparTtjdfDYjrPGA/94nVf95eI7jeqjjtzMTFrA4lX6rWVh/tPwqq8LOH+m/B6+rT8pJLhHlN20ZP9S99CbwW0I5ReN1YdxGlLSyBQWJ0FUCe6yWmjZJfrNmWU+DixYeZFO/l8sgEYZnubAHVmJ0XKwAvWmeaeWUdeum9tnaT8ItPZNu15FGMtU1b2x28cmNnCLoO3kgHFj2/j56aLszBJDGscYsqjzJ5knmSdaj93djjDx2Ns7aue/6o7h+Z51MqKvUoZI248ffvfSyslVqzzyutlou5fd7s6ArsCgCojenaEkGFmmiUM6LdQeA1sWPaBx8qkIxPeTeGPCwySE5jGBmVSMwzaIO4nvrNt297MJNihGcAiNK9lkuJGLG5u+ZbnnqDVMw238RFJKz2lE36ZJRnSX9odvYRwpbB74NA98LgsMkrXAIWWR7cwt2uB3CgN2jUDgAPDQfClCf50/CsTi2rvHiv0aSop4ZYY4x6yC/xq07ubrbYOuJlbXlJMWt5LegL3K6gakDxIp7sScvGOFh1Qbg3sT2crW+NQUe57kWeYDwUn4k1O7D2THhYuijvbMzMSblmY3Zj2eAoCTqC2lhHDZjZ4y1yCLlO+3ZU7XhFNOIKxt2PpYjEjrckEG/VIGtu43tULsfd0pYznMeSLa7eNuAq6zbNibUoLnmND6iusJgEjHVGvadTVarhKVWpnkvt7+XO5ao42tSpOlB2XPj5nmCw5GrAA2sAOCjsFPKKKslUKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAK8oooBvjMBFKuSVFdexgCPjUVs3dnDwydJGpB4AElgvMlb6g8uNFFaye3Ux9vqidooorYye1wRfSiigM23u9msDBpYJDDc6plzp9kXBXwvannsz3KhwqnEE9LNJcZytsiAjqqLm1zqTfWiigL9kFdUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUB//Z",
  "https://professionalproductphotography.com/wp-content/uploads/2021/11/professional-product-photography-simple-gallery-1024x512.jpg",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
  "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
  "https://www.shutterstock.com/image-photo/tomb-hazrat-shah-ruknealam-multan-260nw-1901268325.jpg",
  "https://media.istockphoto.com/id/590586198/photo/shrine-of-shah-runkn-e-alam-multan.jpg?s=612x612&w=0&k=20&c=WM9t43_OI-qfLT_JvTdHp59pCgaJ6oroyxl5LRhlo8I=",
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
  "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
];

export const SliderImagesBanner = [
  {
    id: "1",
    title: "Mens Footwear",
    image:
      "https://johnlewis.scene7.com/is/image/johnlewis/mens-footwear-img1-180621",
  },
  {
    id: "2",
    title: "Womens Footwear",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fwPEUSf2LS0En3uDiuy0rmHCv8byBb6eHg&usqp=CAU",
  },
  {
    id: "3",
    title: "Kids Footwear",
    image:
      "https://thumbs.dreamstime.com/b/little-boy-trying-shoes-kids-store-little-boy-trying-shoes-kids-store-side-view-son-choosing-sneakers-supermarket-149480583.jpg",
  },
];

export const MegaDiscountDela = [
  {
    id: "1",
    title: "Shop Now",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fwPEUSf2LS0En3uDiuy0rmHCv8byBb6eHg&usqp=CAU",
  },
  {
    id: "2",
    title: "Shop Now",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fwPEUSf2LS0En3uDiuy0rmHCv8byBb6eHg&usqp=CAU",
  },
];

export const topSallerData = [
  {
    id: "1",
    title: "Men's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHPI-Z7KOgBBmcHEwnk7s8LnU5R6o4nNAUA&usqp=CAU",
    price: "$100",
    oldPrice: "$150",
    discount: "33%",
    rating: "4.5",
    ratingCount: "100",
    description: "Lorem ipsum dolor sit amet,",
    color: "Black/White",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Nike",
    category: "Mens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "2",
    title: "Women's Sneakers",
    image:
      "https://media.istockphoto.com/id/1034457896/photo/stylish-woman-wearing-black-summer-shoes-with-straw-sole-outdoors-comfortable-sandals-beauty.jpg?s=612x612&w=0&k=20&c=3sTprSCmzloWCysMqRjOITEdfUmhuM-TKre30nL2-TU=",
    price: "$80",
    oldPrice: "$100",
    discount: "20%",
    rating: "4.8",
    ratingCount: "50",
    description: "Lorem ipsum dolor sit amet,",
    color: "Pink/White",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Adidas",
    category: "Womens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "3",
    title: "Kids' Sandals",
    image:
      "https://ae01.alicdn.com/kf/S7157982097654359ac7874ba3c3f02acw/2022-Summer-Kids-Sandals-Boys-Fashion-Sandalias-Childrens-Shoes-Non-slip-Soft-Bottom-Leather-Boy-Sandals.jpg",
    price: "$25",
    oldPrice: "$30",
    discount: "17%",
    rating: "4.2",
    ratingCount: "20",
    description: "Lorem ipsum dolor sit amet, ",
    color: "Blue",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Crocs",
    category: "Kids",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "4",
    title: "Men's Dress Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FwuJdCl3puyI94LeW1jmUgTI9NY9YYlarbNfGBXduOuoalzoEZhaL9Rfs7wzCS5p21A&usqp=CAU",
    price: "$120",
    oldPrice: "$150",
    discount: "20%",
    rating: "4.7",
    ratingCount: "80",
    description: "Lorem ipsum dolor sit amet,",
    color: "Brown",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Clarks",
    category: "Mens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "5",
    title: "Women's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGSUpyeajgZZ5nPBsHcFIYYB-l6dZkNHngQ&usqp=CAU",
    price: "$90",
    oldPrice: "$110",
    discount: "18%",
    rating: "4.6",
    ratingCount: "60",
    description: "Lorem ipsum dolor sit amet,",
    color: "Gray/Pink",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "New Balance",
    category: "Womens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "6",
    title: "Men's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHPI-Z7KOgBBmcHEwnk7s8LnU5R6o4nNAUA&usqp=CAU",
    price: "$100",
    oldPrice: "$150",
    discount: "33%",
    rating: "4.5",
    ratingCount: "100",
    description: "Lorem ipsum dolor sit amet,",
    color: "Black/White",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Nike",
    category: "Mens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "7",
    title: "Women's Sneakers",
    image:
      "https://media.istockphoto.com/id/1034457896/photo/stylish-woman-wearing-black-summer-shoes-with-straw-sole-outdoors-comfortable-sandals-beauty.jpg?s=612x612&w=0&k=20&c=3sTprSCmzloWCysMqRjOITEdfUmhuM-TKre30nL2-TU=",
    price: "$80",
    oldPrice: "$100",
    discount: "20%",
    rating: "4.8",
    ratingCount: "50",
    description: "Lorem ipsum dolor sit amet,",
    color: "Pink/White",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Adidas",
    category: "Womens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "8",
    title: "Kids' Sandals",
    image:
      "https://ae01.alicdn.com/kf/S7157982097654359ac7874ba3c3f02acw/2022-Summer-Kids-Sandals-Boys-Fashion-Sandalias-Childrens-Shoes-Non-slip-Soft-Bottom-Leather-Boy-Sandals.jpg",
    price: "$25",
    oldPrice: "$30",
    discount: "17%",
    rating: "4.2",
    ratingCount: "20",
    description: "Lorem ipsum dolor sit amet, ",
    color: "Blue",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Crocs",
    category: "Kids",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "9",
    title: "Men's Dress Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FwuJdCl3puyI94LeW1jmUgTI9NY9YYlarbNfGBXduOuoalzoEZhaL9Rfs7wzCS5p21A&usqp=CAU",
    price: "$120",
    oldPrice: "$150",
    discount: "20%",
    rating: "4.7",
    ratingCount: "80",
    description: "Lorem ipsum dolor sit amet,",
    color: "Brown",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "Clarks",
    category: "Mens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
  {
    id: "10",
    title: "Women's Running Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGSUpyeajgZZ5nPBsHcFIYYB-l6dZkNHngQ&usqp=CAU",
    price: "$90",
    oldPrice: "$110",
    discount: "18%",
    rating: "4.6",
    ratingCount: "60",
    description: "Lorem ipsum dolor sit amet,",
    color: "Gray/Pink",
    size: ["40/6", "42/3", "44/1", "20/4", "12"],
    quantity: "1",
    brand: "New Balance",
    category: "Womens",
    hoverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBmzhPbydbbt0yejDczPcLucQsAht-dU9IV2BzTiJRMM034gtcFzzkfhDwVwWabr87Vg&usqp=CAU",
    sampleImages: sampleImages,
  },
];

export const brandsImages = [
  {
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjg_vXZIY8cVSgwTNZzxTNXZGzOHqmhSGdUFz4jh7BIzcemMlE1w-0wpC2HYdesilCafQ&usqp=CAU",
  },
  {
    id: "2",
    image:
      "https://cdn.shopify.com/s/files/1/0262/5804/7069/collections/Calza.png?v=1583492578",
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT39GF5q3JqmKsIknVfcCNjchqHETlBkSqe0hjuY1LFyopQfWKBOj1QqFhm-cF2P2X9k&usqp=CAU",
  },
];

export const SpotlightData = [
  {
    id: "1",
    spotlight: true,
    image:
      "https://cdn.shopify.com/s/files/1/0262/5804/7069/collections/Calza.png?v=1583492578",
    category: "Womens Wheels",
    titleBottom: "Shop Now",
  },
  {
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGSUpyeajgZZ5nPBsHcFIYYB-l6dZkNHngQ&usqp=CAU",
    category: "Mens Wheels",
    titleBottom: "Shop Now",
    spotlight: true,
  },
  {
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FwuJdCl3puyI94LeW1jmUgTI9NY9YYlarbNfGBXduOuoalzoEZhaL9Rfs7wzCS5p21A&",
    category: "Kids Wheels",

    titleBottom: "Shop Now",
    spotlight: true,
  },
];

export const navMenu = [
  {
    id: "1",
    title: "Sale",

    subMenu: [
      {
        title: "MENS",
        id: "Mens",
      },
      {
        title: "WOMENS",
        id: "Womens",
      },
      {
        title: "KIDS",
        id: "Kids",
      },
      {
        title: "ACCESSORIES",
        id: "Accessories",
      },
    ],
  },
  {
    id: "2",
    title: "Eid Collection 2023",

    subMenu: [
      {
        title: "MEN",
        id: "Men",
      },
      {
        title: "WOMEN",
        id: "Women",
      },
      {
        title: "Girls",
        id: "Girls",
      },
      {
        title: "Boys",
        id: "Boys",
      },
    ],
  },
  {
    id: "3",
    title: "Men",
    link: "/",
    subMenu: [
      {
        title: "Shoes",
        id: "Shoes",
      },
    ],
  },
  {
    id: "3",
    title: "Kids",
    link: "/",
    subMenu: [
      {
        title: "Girls",
        id: "Girls",
      },
      {
        title: "Boys",
        id: "Boys",
      },
    ],
  },
  {
    id: "4",
    title: "Accessories",
    link: "/",
    subMenu: [
      {
        id: "Womens Accessories",
        title: "Womens Accessories",
      },
      {
        id: "Mens Accessories",
        title: "Mens Accessories",
      },
    ],
  },
  {
    id: "5",
    title: "SHOP BY BRAND",
    link: "/",
    subMenu: [
      {
        id: "NDURE",
        title: "NDURE",
      },
      {
        id: "Liza",
        title: "Liza",
      },
      {
        id: "Calza",
        title: "Calza",
      },
    ],
  },
  {
    id: "3",
    title: "CUSTOMER REVIEWS",
    link: "/",
  },
];

export const DetailPageTabs = [
  {
    id: "1",
    title: "Description",
    content: [
      "Feel the breeze with these Smart Sandals for Men by Ndure.",

      "These shoes have been made with good quality Man Made Leather material that gives them durability",

      "These shoes come with a contemporary detailing and are finished with a comfortable insole and round toe shape",

      "A TPR outsole keeps the shoe light and provides anti-slip resistence.",
    ],
  },
  {
    id: "2",
    title: "Customer Reviews",
  },
  {
    id: "3",
    title: "Shipping & Returns",
    content: [
      "Free Shipping on all orders above Rs.2,500",

      "Fixed Shipping on all orders below Rs.2,500",

      "The delivery time will be 7-10 working days",
      "The parcel will be sent though a registered courier company. Customers are supposed to pay before receiving the parcel due to security concerns",

      "Customer should simply reject the parcel in case its opened or damaged at the time of delivery",
    ],
  },
];
