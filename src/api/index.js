import Ajax from '@/ajax/Ajax'
import mockAjax from '@/ajax/mockAjax'
export const reqCategoryList = () => Ajax({
  url: "/product/getBaseCategoryList",
  method: "GET"
})
export const reqFloor = () => mockAjax.get('/floor')
export const reqBanner = () => mockAjax.get("/banner")
export const reqGoodsList = (searchParams) => Ajax.post("/list",searchParams)
