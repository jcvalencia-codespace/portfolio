import { redirect } from 'next/navigation';

export default function home() {
  // Redirect to the /main page
  redirect('/main');
}  
console.log('Redirecting to /main'); // This line is never reached, but it's good practice to return something.
  
