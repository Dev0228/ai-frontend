export function LoadingAppScreen() {
  return (
    <div className="bg-black border-gray-700 border-2 w-full max-w-full p-4 flex items-center justify-center min-h-[200px] h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400 mx-auto mb-4"></div>
        <h1 className="text-gray-100 text-xl font-semibold">Welcome Aidonic</h1>
        <p className="text-gray-400 mt-1">Loading ...</p>
      </div>
    </div>
  );
}
