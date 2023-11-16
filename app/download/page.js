import ButtonDownload from './ButtonDownload'

export default function Download(){


    return(
        <main className="flex justify-center h-screen items-center">
            <div className="border shadow-lg p-[50px]">
                <h1 className="text-[20px] font-semibold mb-[40px]">Введите пароль для скачивания</h1>
                <ButtonDownload/>
            </div>
        </main>
    )
}