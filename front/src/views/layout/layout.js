import CorpoProvider from '../../utils/corpo'
import Login from '../login/login';
export default function Layout() {
  return (
    <CorpoProvider>
        <Login/>
    </CorpoProvider>
  )
}
