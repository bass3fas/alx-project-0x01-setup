import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">ID: {id}</p>
        <p className="text-gray-700 text-base">@{username}</p>
        <p className="text-gray-700 text-base">{email}</p>
        <p className="text-gray-700 text-base">{phone}</p>
        <p className="text-gray-700 text-base">{website}</p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">Address</div>
        <p className="text-gray-700 text-base">{address.street}, {address.suite}</p>
        <p className="text-gray-700 text-base">{address.city}, {address.zipcode}</p>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">Company</div>
        <p className="text-gray-700 text-base">{company.name}</p>
        <p className="text-gray-700 text-base">{company.catchPhrase}</p>
        <p className="text-gray-700 text-base">{company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;