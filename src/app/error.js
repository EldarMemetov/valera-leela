"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="uk">
      <body>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h2>Что-то пошло не так</h2>
          <p>Произошла непредвиденная ошибка. Попробуйте ещё раз.</p>
          <button onClick={() => reset()}>Попробовать снова</button>
        </div>
      </body>
    </html>
  );
}
