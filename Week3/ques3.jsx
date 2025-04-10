function UserCard({ name, email }) {
    return (
      <div className="max-w-sm bg-white shadow-lg rounded-lg p-4 m-4 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  }