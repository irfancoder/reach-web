import { makeRoute } from '@/routes/utils'
import { Home } from '@/pages'
import { Guest } from '@/layouts'

const routes = [
    makeRoute('/', 'home:index', Home, [Guest])
]

export default routes
