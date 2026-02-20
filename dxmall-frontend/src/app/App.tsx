import { Routes, Route } from 'react-router'
import { RootLayout } from '@/app/layouts/RootLayout'
import { HomePage } from '@/pages/home/HomePage'
import { LoginPage } from '@/pages/login/LoginPage'
import { SignupPage } from '@/pages/signup/SignupPage'
import { ProtectedRoute } from '@/shared/ui/ProtectedRoute'

export function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />

        {/* 보호 라우트 - 추후 확장 */}
        <Route element={<ProtectedRoute />}>
          {/* 예: <Route path="orders" element={<OrdersPage />} /> */}
        </Route>
      </Route>
    </Routes>
  )
}
