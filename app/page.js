import Form from './components/Form'

export default function Home(){
  return(
    <main className="flex justify-center">
      <div className="my-[60px] border shadow-lg p-[40px]">
        <div className='flex justify-center mb-[20px] border-b-2'>
          <h1 className='text-[24px] font-semibold mb-[20px]'>Внесите данные для регистрации</h1>
        </div>
        <Form/>
      </div>
    </main>
  )
}