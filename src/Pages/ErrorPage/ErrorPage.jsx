import style from './ErrorPage.module.css'

export default function ErrorPage() {
  return (
    <main>
      <h1 className={style.page_Title}>ErrorPage</h1>
      <div className={style.content}>
        <h2>404</h2>
        <p>Something gets wrong</p>
      </div>
      
    </main>
  )
}
