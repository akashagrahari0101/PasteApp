
return (
  <div className="max-w-5xl mx-auto px-5 py-12">

    <div className="text-center mb-10">
      <span className="text-violet-400 font-semibold text-sm tracking-widest uppercase">
        Your Personal Workspace
      </span>

      <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
        Save Your Ideas.
        <span className="text-violet-500"> Share Your Code.</span>
      </h1>

      <p className="text-slate-400 mt-4">
        Create, manage and organize your code snippets in one place.
      </p>
    </div>

    <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          className="flex-1 min-w-0 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none"
          type="text"
          placeholder="Enter your paste title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          onClick={createPaste}
          className="px-7 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-lg shadow-violet-600/20"
        >
          {pasteId ? 'Update Paste' : '+ Create Paste'}
        </button>

      </div>

      <div className="flex items-center justify-between mb-3">
        <label className="text-slate-300 font-semibold">
          Paste Content
        </label>

        <span className="text-xs text-slate-500">
          Your personal code editor
        </span>
      </div>

      <textarea
        className="w-full min-w-0 p-5 rounded-xl bg-slate-950 border border-slate-700 text-green-300 placeholder:text-slate-600 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 font-mono"
        value={value}
        placeholder="// Write your code or notes here..."
        onChange={(e) => setValue(e.target.value)}
        rows={18}
      />

      <div className="flex justify-between items-center mt-4 text-xs text-slate-500">
        <span>PasteFlow Workspace</span>
        <span>{value.length} characters</span>
      </div>

    </div>
  </div>
);
