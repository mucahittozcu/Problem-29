import { EnvelopeIcon } from '@heroicons/react/20/solid'
import { useReducer } from 'react'

function reducer(state, action){
  switch(action.type){
    case "email":{
      return{
        ...state,
        email: action.value
      }
    }
    case "form":{
      return{
        ...state,
         submit:true
      }
    }
    case "reset":{
      return{
        ...state,
        submit: false,
        email: ""
      }
    }
  }
  throw Error('Bilinmeyen eylem:: ' + action.type)
}

export default function InviteUsers() {
  const [state,dispatch] = useReducer(reducer,{
    email: "",
    submit:false,
  })

  const handleSubmit = (event) =>{
    event.preventDefault()
      dispatch({ type: "form"})
   
  }
  return (
    <div className='mx-auto p-8 max-w-lg'>
      <div>
        <Header />
        <form className='mt-6 flex' onSubmit={handleSubmit}>
          <label htmlFor='email' className='sr-only'>
            E-mail adresiniz
          </label>
          <input
            type='email'
            name='email'
            value={state.email}
            onChange={(event) => dispatch({ type: "email", value: event.target.value })}
            id='email'
            className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='E-posta giriniz'
          />
          <button
            type='submit'
            className='ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Davetiye gönderin
          </button>
        </form>
      </div>
      <div className='mt-10'>
        <h3 className='text-sm font-medium text-gray-500'>
          Ekip üyesi <span className='text-indigo-500'>{state.submit && state.email}</span> eklendi!
        </h3>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className='text-center'>
      <EnvelopeIcon className='mx-auto h-12 w-12 text-gray-400' />
      <h2 className='mt-2 text-base font-semibold leading-6 text-gray-900'>
        Ekip üyelerini davet edin
      </h2>
      <p className='mt-1 text-sm text-gray-500'>
        Projenize henüz herhangi bir ekip üyesi eklemediniz. Projenin sahibi
        olarak, ekip üyesi izinlerini yönetebilirsiniz.
      </p>
    </div>
  )
}

// import { EnvelopeIcon } from '@heroicons/react/20/solid'
// import { useReducer } from 'react'

// function reducer(state, action){
//   switch(action.type){
//    case "email":
//     return {...state, mail: action.value} 
//     case "submit":
//       return {...state.mail, submit:true, mail:""}
//     default:
//       return state
//   }
// }

// export default function InviteUsers() {
//   const [state,dispatch] = useReducer(reducer,{
//     mail: "",
//     submit: false
//   })

//   const handleSubmit = (event) =>{
//     event.preventDefault()
//     dispatch({ type: "submit", mail:state.mail})
//   }

//   const handleChange = (event) => {
//     dispatch({
//       type: "email",
//       value: event.target.value
//     })
//   }
//   return (
//     <div className='mx-auto p-8 max-w-lg'>
//       <div>
//         <Header />
//         <form className='mt-6 flex' onSubmit={handleSubmit}>
//           <label htmlFor='email' className='sr-only'>
//             E-mail adresiniz
//           </label>
//           <input
//             type='email'
//             name='email'
//             value={state.mail}
//             onChange={handleChange}
//             id='email'
//             className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//             placeholder='E-posta giriniz'
//           />
//           <button
//             type='submit'
//             className='ml-4 flex-shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//           >
//             Davetiye gönderin
//           </button>
//         </form>
//       </div>
//       <div className='mt-10'>
        
//         <h3 className='text-sm font-medium text-gray-500'>
//           Ekip üyesi <span className='text-indigo-500'>{state.submit && state.mail}</span> eklendi!
//         </h3>
          
//       </div>
//     </div>
//   )
// }

// function Header() {
//   return (
//     <div className='text-center'>
//       <EnvelopeIcon className='mx-auto h-12 w-12 text-gray-400' />
//       <h2 className='mt-2 text-base font-semibold leading-6 text-gray-900'>
//         Ekip üyelerini davet edin
//       </h2>
//       <p className='mt-1 text-sm text-gray-500'>
//         Projenize henüz herhangi bir ekip üyesi eklemediniz. Projenin sahibi
//         olarak, ekip üyesi izinlerini yönetebilirsiniz.
//       </p>
//     </div>
//   )
// }
