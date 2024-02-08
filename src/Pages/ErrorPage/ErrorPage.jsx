import style from './ErrorPage.module.css'

/**
 * Renders the ErrorPage component.
 * @returns {JSX.Element} The rendered ErrorPage component.
 */
export default function ErrorPage() {
  return (
    <main>
      <h1 className={style.page_Title}>ErrorPage</h1>
      <div className={style.content}>
        <h2 className={style.errorCode}>404</h2>
        <p>Something gets wrong</p>
      </div>
      
    </main>
  )
}
