import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorProfile = () => {
  const { dToken, backendUrl, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/doctor/update-profile',
        {
          fees: profileData.fees,
          address: profileData.address,
          available: profileData.available,
        },
        { headers: { dToken } }
      )

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  return profileData && (
    <div className='m-5'>
      <div className='bg-white border rounded max-w-4xl overflow-hidden'>
        <div className='flex flex-col sm:flex-row gap-6 p-6'>
          <img className='w-40 h-40 object-cover rounded bg-indigo-50' src={profileData.image} alt="" />

          <div className='flex-1'>
            <p className='text-2xl font-medium text-gray-700'>{profileData.name}</p>
            <div className='flex items-center gap-2 mt-1 text-gray-600'>
              <p>{profileData.degree}</p>
              <span>-</span>
              <p>{profileData.speciality}</p>
            </div>
            <p className='mt-1 text-sm border rounded-full px-2 py-0.5 w-fit'>{profileData.experience}</p>

            <div className='mt-4'>
              <p className='font-medium text-gray-700'>About</p>
              <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{profileData.about}</p>
            </div>

            <div className='mt-4 text-sm'>
              <p className='font-medium text-gray-700'>Appointment fee</p>
              {isEdit ? (
                <input
                  className='border rounded px-2 py-1 mt-1'
                  type='number'
                  value={profileData.fees}
                  onChange={(e) => setProfileData((prev) => ({ ...prev, fees: Number(e.target.value) }))}
                />
              ) : (
                <p className='text-gray-600 mt-1'>{profileData.fees}</p>
              )}
            </div>

            <div className='mt-4 text-sm'>
              <p className='font-medium text-gray-700'>Address</p>
              {isEdit ? (
                <div className='flex flex-col gap-2 mt-1 max-w-md'>
                  <input
                    className='border rounded px-2 py-1'
                    value={profileData.address.line1}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                  />
                  <input
                    className='border rounded px-2 py-1'
                    value={profileData.address.line2}
                    onChange={(e) => setProfileData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                  />
                </div>
              ) : (
                <div className='text-gray-600 mt-1'>
                  <p>{profileData.address.line1}</p>
                  <p>{profileData.address.line2}</p>
                </div>
              )}
            </div>

            <div className='flex items-center gap-2 mt-4 text-sm'>
              <input
                type='checkbox'
                checked={profileData.available}
                disabled={!isEdit}
                onChange={() => setProfileData((prev) => ({ ...prev, available: !prev.available }))}
              />
              <p>Available</p>
            </div>

            <button
              onClick={isEdit ? updateProfile : () => setIsEdit(true)}
              className='mt-5 px-8 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all'
            >
              {isEdit ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
