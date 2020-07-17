import Mock from "mockjs"
import floor from '@/mock/floor'
import banner from '@/mock/banner'
Mock.mock("/mock/floor", { code: 200, data: floor })
Mock.mock("/mock/banner", { code: 200, data: banner })