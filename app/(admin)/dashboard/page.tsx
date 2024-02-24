const Profile = () => {
  return (
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
        <div className="mt-4">
          <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
            Welcome!
          </h3>
          <div className="mx-auto max-w-180">
            <h4 className="font-semibold text-black dark:text-white">TLDR;</h4>
            <p className="mt-4.5">
              You can manage list of article in kelvinmijaya.com by using this
              dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
