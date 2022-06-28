import { makeRoute } from '@/routes/utils'
import { Home } from '@/pages'
import { Master } from '@/layouts'

const routes = [
    makeRoute('/', 'home:index', Home, [Master])
]

export default routes
