Hãy tạo cho tôi một dự án Next.js mới theo đúng các quy chuẩn sau:

## Core stack

- Next.js mới nhất, dùng App Router
- TypeScript
- Tailwind CSS
- ESLint
- Dùng Yarn

## Naming convention

- Tên file dùng lowercase và kebab-case
- Ví dụ:
  - home.tsx
  - user-card.tsx
  - login-form.tsx
- File service phải đặt theo dạng:
  - auth.services.ts
  - user.services.ts
  - product.services.ts
- File type phải đặt theo dạng:
  - auth.types.ts
  - user.types.ts
- File schema phải đặt theo dạng:
  - auth.schemas.ts
  - user.schemas.ts
- File constant phải đặt theo dạng:
  - auth.constants.ts
  - common.constants.ts
- File hook phải đặt theo dạng:
  - use-auth.ts
  - use-user-profile.ts
- File store phải đặt theo dạng:
  - auth.store.ts
  - cart.store.ts
- File utils phải đặt theo dạng:
  - format-date.ts
  - parse-error.ts
- File component dùng kebab-case:
  - app-sidebar.tsx
  - page-header.tsx
- Tên component React dùng PascalCase
- Tên biến/hàm dùng camelCase
- Tên type/interface dùng PascalCase
- Tên enum dùng PascalCase
- Tên constant global dùng UPPER_SNAKE_CASE nếu cần

## Folder structure

Tổ chức project rõ ràng, dễ scale:

- src/app
- src/components
- src/features
- src/services
- src/lib
- src/hooks
- src/stores
- src/types
- src/constants
- src/utils

## Feature structure

Mỗi feature nên có cấu trúc như sau khi cần:

- components/
- services/
- hooks/
- types/
- schemas/

Ví dụ:
src/features/auth/
components/
hooks/
services/
types/
schemas/

## Code rules

- Ưu tiên code dễ đọc, ít lặp lại
- Tách UI, business logic, API layer rõ ràng
- Không viết logic API trực tiếp trong component nếu có thể tách ra service
- Không hard-code string lặp lại nhiều nơi
- Dùng alias import
- Tạo helper dùng chung nếu có logic lặp
- Tạo type rõ ràng cho data response / request
- Validate form bằng schema
- State server và state client phải tách biệt rõ

## Data fetching rules

- Server state dùng TanStack Query
- Client/global UI state đơn giản dùng Zustand
- Nếu chỉ fetch ở Server Component bằng Next.js thì ưu tiên native fetch của Next.js
- Chỉ dùng Zustand cho UI/global state thật sự cần thiết
- Không lạm dụng global store cho server data

## UI rules

- Dùng shadcn/ui để dựng UI nhanh
- Dùng các component tái sử dụng được
- Có hỗ trợ dark mode nếu hợp lý
- Ưu tiên semantic, responsive, clean layout

## Form rules

- Dùng react-hook-form
- Dùng zod để validate
- Tách schema riêng thành \*.schemas.ts

## Output requirement

Sau khi tạo project, hãy trả về:

1. Danh sách lệnh cài đặt
2. Cấu trúc thư mục hoàn chỉnh
3. Danh sách thư viện cần cài
4. Code mẫu để setup:
   - Zustand
   - TanStack Query
   - shadcn/ui
   - react-hook-form + zod
5. Ví dụ 1 feature mẫu theo đúng convention
6. Giải thích ngắn gọn lý do chọn từng thư viện
7. Mọi file phải tuân thủ naming convention ở trên
