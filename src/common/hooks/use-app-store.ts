import { useStore } from 'react-redux'
import type { AppStore } from '@/lib/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppStore = useStore.withTypes<AppStore>()
