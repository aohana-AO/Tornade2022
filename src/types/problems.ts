export type ProblemCategoryType = '貧困問題' | 'フードロス'
export type ProblemSizeType = '大' | '中' | '小'
export type StatusType = '進行中' | '募集中' | '解決済み'
export type OrganizationType = 'NPO' | '企業' | '個人'

export type ProblemsDocument = {
  title: string // 社会問題のタイトル
  description: string // 社会問題の詳細情報
  latitude: number // 緯度
  longitude: number // 経度
  problemCategory: ProblemCategoryType
  peopleNum: number // 募集人員
  purpose: string // 社会問題を解決するためにやりたいこと
  organization: OrganizationType // 組織か個人か
  problemSize: ProblemSizeType // 社会問題の規模
  status: StatusType // 社会問題解決の進行状況
  createdBy: string // ピンを刺した人の userId
  createdAt: Date // ピンが刺された日付
  terminatedAt: Date // 問題が解決した日付
}
