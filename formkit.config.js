import { generateClasses } from '@formkit/themes'
import theme from './layouts/formkit-theme.js'

export default {
    config: {
        classes: generateClasses(theme),
    },
}
