module.exports = {
	config: {
		message_timestamp_format: "MMM D HH:mm",
		article_timestamp_format: "MMM D",
		language: "id-ID",
		transfer_to_kefu_words: "Hubungkan ke customer service",
		scheduler_role_nickname: "Penjadwal",
		im_html_path: "/id-ID/im_cached.html",
		static_path: "../static",
	},
	common: {
		confirm: "OK",
		cancel: "Batal",
		contact_agent: "Hubungi kami",
		ticket: "Pesan",
		submit: "Kirim",
		agent: "Customer service",
		visitor: "Pengunjung",
		close: "Tutup",
		reply: "Balas",
		tip: "Tips",
		send_failed: "Gagal mengirim",
		loading: "loading...",
		no_more_msg: "tidak ada pesan lagi",
		press_save_img: "Tekan untuk menyimpan gambar",
		session_over_limit: "Semua customer service sedang sibuk. Silakan coba lagi nanti",
	},
	chat: {
		agent_is_typing: "Customer service sedang menulis...",
		current_queue_number: "Antrian: ",
		connecting: "Menghubungkan...",
		send: "Kirim",
		input_placeholder: "Tulis pesan Anda di sini",
		click_to_ticket: "Pesan",
		evaluate_agent_title: "Beri penilaian untuk saya",
		click_to_evaluate: "Nilai",
		paste_image_submit: "Kirim",
		read_full_version: "Baca semua",
		default_emoji: "default",
	},
	message_brief: {
		link: "[Tautan]",
		menu: "[Menu]",
		file: "[File]",
		picture: "[Gambar]",
		emoji: "[Emoji]",
		unknown: "[Tidak diketahui]",
	},
	agent_status: {
		online: "(Online)",
		busy: "(Sibuk)",
		leave: "(Pergi)",
		hidden: "(Sembunyi)",
		offline: "(Offline)",
	},
	event_message: {
		no_agent_online: "Customer service sedang offline. Silakan tinggalkan kontak Anda.",
		session_created: "Percakapan dibuat",
		session_opened: "Percakapan dimulai",
		sessing_transfering: "Memindahkan. Harap tunggu...",
		session_transfered: "Percakapan dipindahkan",
		sessing_closed: "Percakapan berakhir",
	},
	evaluation: {
		rate_my_service: "Beri penilaian Anda",
		review: "Ulasan",
		select_level_please: "Pilih nilai",
		select_tag_please: "Pilih label",
		submit_success: "Sukses dikirim",
	},
	ticket: {
		title: "Isi informasi kontak Anda.",
		name: "Nama",
		phone_number: "Telepon",
		email: "Email",
		content_placeholder: "Tulis pesan Anda di sini",
		is_sending: "Mengirim pesan...",
		invalid_name: "Nama tidak valid",
		invalid_phone: "Telepon tidak valid",
		invalid_email: "Masukkan email yang valid",
		invalid_content: "Pesan tidak boleh kosong. Maksimal 1500 karakter.",
		send_success: "Pesan telah sukses dikirim",
		send_failed_retry: "Gagal mengirim pesan. Silakan coba lagi nanti.",
		send_failed_invalid_token: "Gagal mengirim pesan karena token yang tidak vali.",
	},
	video: {
		waiting: "Tunggu",
		me: "Saya",
		video_ended: "Video call berakhir",
		confirm_prompt: "Undang customer service ke video call? Kirim undangan dan tunggu customer service untuk bergabung dalam video call",
		invite_agent_video: "Undang customer service ke video call",
		// 这个文案待确认
		connecting: "Merekam",
		waiting_confirm: "Undangan video call. Menunggu konfirmasi Anda",
		can_not_connected: "Tidak dapat terhubung ke video call. Silakan coba lagi.",
		can_not_open_camera: "Tidak dapat mengakses kamera.",
	},
	toolbar: {
		emoji: "Emoji",
		picture: "Gambar",
		attachment: "File",
		ticket: "Pesan",
		video_invite: "Video call",
		evaluate_agent: "Kepuasan",
		transfer_to_kefu: "Hubungkan ke customer service",
	},
	prompt: {
		new_message_title_notice: "Pesan baru",
		no_valid_channel: "Tidak ada akun di channel.",
		new_message: "Pesan baru",
		too_many_words: "Pesan terlalu panjang",
		default_off_duty_word: "Kami sedang tutup.",
		_10_mb_file_limit: "Ukuran file tidak boleh lebih dari 10 MB.",
	},
};
